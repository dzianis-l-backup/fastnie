import { useParams } from 'react-router-dom'
import { DetailsView } from './detailsView'
import { useAppSelector } from '../hooks'

export function Details() {
    const { id } = useParams()
    const todo = useAppSelector((store) => store.todos.find((todo) => String(todo.id) === String(id)))

    return <DetailsView todo={todo} />
}
