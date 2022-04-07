import { Card, CardContent, CardActions, Button, Typography } from '@mui/material'
import { Todo } from '../store'
import { IOnTodosToggleClick } from './listTypes'

export function CardItemView({ onTodosToggle, todo }: { todo: Todo; onTodosToggle: IOnTodosToggleClick }) {
    const { isChecked, text, id } = todo

    return (
        <Card sx={{ m: 1, p: 1 }} key={id}>
            <CardContent>
                <Typography variant="body1">{text}</Typography>
                <Typography variant="caption" gutterBottom>
                    {id}
                </Typography>
            </CardContent>
            <CardActions>
                <Button
                    color={'success'}
                    sx={{ textTransform: 'none' }}
                    onClick={onTodosToggle(id)}
                    variant={isChecked ? 'contained' : 'outlined'}
                >
                    {isChecked ? 'Done' : 'Undone'}
                </Button>
            </CardActions>
        </Card>
    )
}
