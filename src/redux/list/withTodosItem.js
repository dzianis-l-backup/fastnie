import { useSelector } from 'react-redux'
import { useActions } from '../todosHooks'
import { toggleAction } from '../todosReducers'

const propTypes = {
    id: PropTypes.string.isRequired,
}

export function withTodosItem(WrappedComponent) {
    function TodosItem({ id }) {
        const todo = useSelector((state) => state.todos.find((todo) => todo.id === id))
        const { toggleAction: dispatchToggle } = useActions({ toggleAction })
        const onTodosToggle = React.useCallback(
            (id) => {
                return (event) => {
                    dispatchToggle(id, event.target.checked)
                }
            },
            [dispatchToggle],
        )

        return <WrappedComponent todo={todo} onTodosToggle={onTodosToggle} />
    }

    TodosItem.propTypes = propTypes

    return TodosItem
}
