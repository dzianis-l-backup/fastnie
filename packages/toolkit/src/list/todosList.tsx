import { TodosListView } from './todosListView'
import { todosSelector } from './todosListSelectors'
import { View } from '../store'
import { useAppSelector } from '../hooks'

export function TodosList() {
    const store = useAppSelector((state) => state)
    const view: View = useAppSelector((state) => state.view)
    const nextTodos = todosSelector(store)

    return <TodosListView todos={nextTodos} view={view} />
}
