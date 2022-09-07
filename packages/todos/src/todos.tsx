import { TodosView } from './todosView'
import { fetchTodos } from './slices'
import { useAppDispatch, useAppSelector } from './hooks'

export const Todos = () => {
    const dispatch = useAppDispatch()
    const isLoading = useAppSelector((state) => state.isLoading)

    React.useEffect(() => {
        void dispatch(fetchTodos())
    }, [dispatch])

    return <TodosView isLoading={isLoading} />
}
