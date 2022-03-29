import { Card, CardContent, CardActions, Button, Typography } from '@mui/material'

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
        <Card sx={{ m: 2, p: 1 }} key={id}>
            <CardContent>
                <Typography variant="caption" gutterBottom>
                    {id}
                </Typography>
                <Typography variant="body1">{text}</Typography>
            </CardContent>
            <CardActions>
                <Button
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

TodosCardItemView.propTypes = propTypes
