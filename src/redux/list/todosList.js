import { TodosListView } from './todosListView'
import { useSelector } from 'react-redux'
import { todosSelector } from './todosListSelectors'

export function TodosList() {
    const store = useSelector((state) => state)
    const view = useSelector((state) => state.view)
    const nextTodos = todosSelector(store)

    return <TodosListView todos={nextTodos} view={view} />
}
