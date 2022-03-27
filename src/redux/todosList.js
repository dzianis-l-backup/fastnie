import { TodosListView } from './todosListView'
import { useSelector } from 'react-redux'

export function TodosList() {
    const todos = useSelector((state) => state.todos)

    return <TodosListView todos={todos}/>
}
