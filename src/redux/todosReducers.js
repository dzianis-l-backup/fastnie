import { combineReducers } from 'redux'
import { v4 } from 'uuid'
import { createSlice } from '@reduxjs/toolkit'

const todosSlice = createSlice({
    name: 'todos',
    initialState: {
        todos: [],
        view: 'text',
        todosText: '',
    },
    reducers: {
        toggle: {
            reducer: (state = {}, action) => {
                const todos = state.todos
                const { id } = action.payload
                const todoIndex = todos.findIndex((todo) => todo.id === id)

                if (todoIndex === -1) {
                    return
                }

                todos[todoIndex].isChecked = !todos[todoIndex].isChecked
            },
            prepare: (id) => {
                return { payload: { id } }
            },
        },
        view: (state) => {
            const nextView = state.view === 'text' ? 'card' : 'text'
            state.view = nextView
        },
        text: {
            reducer: (state = {}, action) => {
                state.todosText = action.payload
            },
        },
        add: (state) => {
            if (state.todosText) {
                const newTodo = { text: state.todosText, id: v4(), isChecked: false }

                state.todos.push(newTodo)
                state.todosText = ''
            }
        },
    },
})

const filterSlice = createSlice({
    name: 'filter',
    initialState: '',
    reducers: {
        filter: (filter, action) => {
            filter = action.payload
            return filter
        },
    },
})

export const { filter: filterAction } = filterSlice.actions
export const { view: viewAction, text: textAction, toggle: toggleAction, add: addAction } = todosSlice.actions

function composeReducers(...funcs) {
    return (state, action) => {
        const nextState = funcs.reverse().reduce((acc, func) => {
            const nextState = func(acc, action)

            return { ...acc, ...nextState }
        }, state)

        return nextState
    }
}

export const reducer = composeReducers(combineReducers({ filter: filterSlice.reducer }), todosSlice.reducer)
