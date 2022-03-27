import { Checkbox, ListItem, ListItemText } from '@mui/material'
import { useSelector } from 'react-redux'
import { useActions } from './todosHooks'
import { getActionsTodosToggle } from './todosActions'

const propTypes = {
    id: PropTypes.string.isRequired,
}

export function TodosListItem({ id }) {
    const todo = useSelector((state) => state.todos.find((todo) => todo.id === id))
    const { isChecked, text } = todo
    const { getActionsTodosToggle: dispatchTodosToggle } = useActions({ getActionsTodosToggle })
    const onTodosToggle = React.useCallback(
        (id) => {
            return (event) => {
                dispatchTodosToggle(id, event.target.checked)
            }
        },
        [dispatchTodosToggle],
    )

    const textDecorationProps = isChecked ? { textDecoration: 'line-through' } : null

    return (
        <ListItem key={id}>
            <Checkbox onChange={onTodosToggle(id)} checked={isChecked} />
            <ListItemText sx={textDecorationProps}>{text}</ListItemText>
        </ListItem>
    )
}

TodosListItem.propTypes = propTypes
