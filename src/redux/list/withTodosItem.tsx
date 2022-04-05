import { useAppSelector, useAppDispatch } from '../hooks'
import { toggleAction } from '../slices'

export function withTodosItem(WrappedComponent) {
    function TodosItem({ id }: { id: string }) {
        const dispatch = useAppDispatch()
        const todo = useAppSelector((state) => state.todos.find((todo) => todo.id === id))

        const onTodosToggle = React.useCallback(
            (id: string) => {
                return () => {
                    dispatch(toggleAction(id))
                }
            },
            [dispatch],
        )

        return <WrappedComponent todo={todo} onTodosToggle={onTodosToggle} />
    }

    return TodosItem
}
