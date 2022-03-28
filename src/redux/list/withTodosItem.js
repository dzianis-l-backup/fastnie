import { useSelector } from 'react-redux'
import { useActions } from '../todosHooks'
import { getActionsTodosToggle } from '../todosActions'

const propTypes = {
    id: PropTypes.string.isRequired,
}

export function withTodosItem(WrappedComponent) {
    function TodosItem({ id }) {
        const todo = useSelector((state) => state.todos.find((todo) => todo.id === id))
        const { getActionsTodosToggle: dispatchTodosToggle } = useActions({ getActionsTodosToggle })
        const onTodosToggle = React.useCallback(
            (id) => {
                return (event) => {
                    dispatchTodosToggle(id, event.target.checked)
                }
            },
            [dispatchTodosToggle],
        )

        return <WrappedComponent todo={todo} onTodosToggle={onTodosToggle} />
    }

    TodosItem.propTypes = propTypes

    return TodosItem
}
