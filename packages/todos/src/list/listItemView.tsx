import { Checkbox, ListItem, ListItemText, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { IOnTodosToggleChange } from './listTypes'
import { Todo } from '../store'

export function TodosListItemView({ onTodosToggle, todo }: { onTodosToggle: IOnTodosToggleChange; todo: Todo }) {
    const { id, text, isChecked } = todo
    // const checkboxProps = isChecked ? { color: 'success' } : null

    return (
        <ListItem
            key={id}
            sx={{
                p: 0,
                bgcolor: '#fafafa',
            }}
        >
            <Checkbox color="success" onChange={onTodosToggle(id)} checked={isChecked} />
            <ListItemText sx={isChecked ? { textDecoration: 'line-through' } : null}>{text}</ListItemText>
            <Link to={`/details/${id}`} style={{ textDecoration: 'none' }}>
                <Typography variant="body1" sx={{ color: '#5484a8', textDecoration: 'none' }}>
                    Show details
                </Typography>
            </Link>
        </ListItem>
    )
}
