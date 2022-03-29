import { Todos } from './todos'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import { reducer } from './todosReducers'

const store = configureStore({ reducer })

export function App() {
    return (
        <Provider store={store}>
            <Todos />
        </Provider>
    )
}
