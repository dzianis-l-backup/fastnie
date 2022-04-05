import * as uuid from 'uuid'
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import { AppState, Todo } from './store'

const initialState: AppState = {
    todos: [],
    view: 'text',
    todosText: '',
    isLoading: true,
    filter: '',
}

interface TodoResponse {
    userId: string
    completed: boolean
    title: string
    id: string
}

const fetchTodos = createAsyncThunk('todos/fetch/get', async (): Promise<Todo[]> => {
    const todosResponse: TodoResponse[] =
        (await fetch('https://jsonplaceholder.typicode.com/todos').then((response) => response.json())) || []
    const nextTodos: Todo[] = todosResponse.map((todo: TodoResponse): Todo => {
        const { userId, completed, title, id } = todo

        return {
            id,
            userId,
            isChecked: completed,
            text: title,
        }
    })

    return nextTodos
})

const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        toggle: {
            reducer: (state, action: PayloadAction<{ id: string }>) => {
                const todos = state.todos
                const { id } = action.payload
                const todoIndex = todos.findIndex((todo) => todo.id === id)

                if (todoIndex === -1) {
                    return
                }

                todos[todoIndex].isChecked = !todos[todoIndex].isChecked
            },
            prepare: (id: string) => {
                return { payload: { id } } as { payload: { id: string } }
            },
        },
        view: (state) => {
            const nextView = state.view === 'text' ? 'card' : 'text'
            state.view = nextView
        },
        text: (state, action: PayloadAction<string>) => {
            state.todosText = action.payload
        },
        add: (state) => {
            if (state.todosText) {
                const newTodo = { text: state.todosText, id: uuid.v4(), isChecked: false }

                state.todos.push(newTodo)
                state.todosText = ''
            }
        },
        filter: (state, action) => {
            state.filter = action.payload
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchTodos.fulfilled, (state, action) => {
            state.todos = action.payload
            state.isLoading = false
        })
    },
})

export const {
    view: viewAction,
    text: textAction,
    toggle: toggleAction,
    add: addAction,
    filter: filterAction,
} = todosSlice.actions
export { fetchTodos }
export const reducer = todosSlice.reducer
