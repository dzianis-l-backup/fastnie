import { TodosView } from './todosView'
import { fetchTodos } from './todosReducers'
import { useActions } from './todosHooks'

export function Todos() {
    const { fetchTodos: _fetchTodos } = useActions({ fetchTodos })

    React.useEffect(() => {
        _fetchTodos()
    }, [_fetchTodos])

    return <TodosView />
}
