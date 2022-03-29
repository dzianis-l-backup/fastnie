import { Checkbox, ListItem, ListItemText } from '@mui/material'

const propTypes = {
    todo: PropTypes.shape({
        id: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        isChecked: PropTypes.bool,
    }),
    onTodosToggle: PropTypes.func,
}

export function TodosListItemView({ onTodosToggle, todo }) {
    const { id, text, isChecked } = todo
    const checkboxProps = isChecked ? { color: 'success' } : null

    return (
        <ListItem
            key={id}
            sx={{
                p: 0,
                bgcolor: '#fafafa',
            }}
        >
            <Checkbox onChange={onTodosToggle(id)} checked={isChecked} {...checkboxProps} />
            <ListItemText sx={isChecked ? { textDecoration: 'line-through' } : null}>{text}</ListItemText>
        </ListItem>
    )
}

TodosListItemView.propTypes = propTypes