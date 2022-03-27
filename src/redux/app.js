import { Todos } from './todos'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { reducer } from './todosReducers'

const reduxDevTools = !ENV.production && window.__REDUX_DEVTOOLS_EXTENSION__?.()
const store = createStore(reducer, reduxDevTools)

export function App() {
    return (
        <Provider store={store}>
            <Todos />
        </Provider>
    )
}
