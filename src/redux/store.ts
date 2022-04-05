import { configureStore } from '@reduxjs/toolkit'
import { reducer } from './slices'

export type Todo = { id: string; text?: string; isChecked?: boolean; userId?: string }
export type Todos = Todo[]
export type TodoText = string
export type View = 'card' | 'text'

export interface AppState {
    todos: Todos
    view: View
    todosText?: TodoText
    isLoading?: boolean
    filter: string
}

export const store = configureStore({ reducer })
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
