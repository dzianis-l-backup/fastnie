import { Router } from './router'
import { Provider } from 'react-redux'
import { store } from './store'

export function App() {
    return (
        <Provider store={store}>
            <Router />
        </Provider>
    )
}
