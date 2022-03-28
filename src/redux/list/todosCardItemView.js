import { Card, CardContent, CardActions, ListItemText, Checkbox } from '@mui/material'

const propTypes = {
    todo: PropTypes.shape({
        id: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        isChecked: PropTypes.bool,
    }),
    onTodosToggle: PropTypes.func,
}

export function TodosCardItemView({ onTodosToggle, todo }) {
    const { isChecked, text, id } = todo
    return (
        <Card sx={{ minWidth: 275 }} key={id}>
            <CardContent>{text}</CardContent>
            <CardActions>
                <Checkbox onChange={onTodosToggle(id)} checked={isChecked} />
                <ListItemText sx={isChecked ? { textDecoration: 'line-through' } : null}>
                    {isChecked ? 'Done' : 'Undone'}
                </ListItemText>
            </CardActions>
        </Card>
    )
}

TodosCardItemView.propTypes = propTypes
