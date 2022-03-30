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
    const buttonProps = isChecked ? { color: 'success' } : null

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
                    sx={{ textTransform: 'none' }}
                    onClick={onTodosToggle(id)}
                    variant={isChecked ? 'contained' : 'outlined'}
                    {...buttonProps}
                >
                    {isChecked ? 'Done' : 'Undone'}
                </Button>
            </CardActions>
        </Card>
    )
}

TodosCardItemView.propTypes = propTypes
