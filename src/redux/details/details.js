import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { DetailsView } from './detailsView'

export function Details() {
    const { id } = useParams()
    const todo = useSelector((store) => store.todos.find((todo) => String(todo.id) === String(id)))

    return <DetailsView todo={todo} />
}
