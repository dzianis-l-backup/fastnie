import { combineReducers } from 'redux'
import { ACTIONS } from './todosActions'
import { v4 } from 'uuid'
import { produce } from 'immer'
import { createSlice } from '@reduxjs/toolkit'

const view = doActionTemplate(ACTIONS.VIEW, 'text', (view) => (view === 'text' ? 'card' : 'text'))

const addTodos = (state = {}, action) => {
    const { todos = [], todosText } = state

    if (ACTIONS.TODOS_ADD === action?.type && todosText) {
        const newTodo = { text: todosText, id: v4(), isChecked: false }

        return produce(state, (draft) => {
            draft.todos.push(newTodo)
            draft.todosText = ''
        })
    }

    return { ...state, todos }
}

const toggleTodos = (state = {}, action) => {
    const { todos = [] } = state

    if (ACTIONS.TODOS_TOGGLE === action?.type) {
        const { id } = action.payload
        const todoIndex = todos.findIndex((todo) => todo.id === id)

        if (todoIndex === -1) {
            return state
        }

        return produce(state, (draft) => {
            draft.todos[todoIndex].isChecked = !draft.todos[todoIndex].isChecked
        })
    }

    return { ...state, todos }
}

const todosText = doActionTemplate(ACTIONS.TODOS_TEXT, '', (_, action) => {
    const { payload: text } = action

    return text
})

function doActionTemplate(type, initialValue, doAction) {
    return function (state = initialValue, action) {
        if (type === action?.type) {
            return doAction(state, action)
        }

        return state
    }
}

function composeReducers(...funcs) {
    return (state, action) => {
        const nextState = funcs.reverse().reduce((acc, func) => {
            const nextState = func(acc, action)

            return { ...acc, ...nextState }
        }, state)

        return nextState
    }
}

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

export const reducer = composeReducers(
    combineReducers({ filter: filterSlice.reducer, todosText, view }),
    addTodos,
    toggleTodos,
)
