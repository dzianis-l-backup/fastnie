import { Box, Grid, IconButton, TextField } from '@mui/material'
import { Add } from '@mui/icons-material'

const propTypes = {
    onHandleTextChange: PropTypes.func,
    onTodoAdd: PropTypes.func,
    todoText: PropTypes.string,
}
export function TodosPanelView({ onHandleTextChange, onTodoAdd, todoText }) {
    return (
        <Box sx={{ display: 'inline-block', border: '2px solid #89b0f0', borderRadius: '10px', p: 2 }}>
            <Grid container spacing={0} direction="row" alignItems="end" justifyContent="center">
                <TextField
                    variant="standard"
                    label="Todo task"
                    value={todoText}
                    sx={{ mr: 1 }}
                    onChange={onHandleTextChange}
                />
                <IconButton color="primary" onClick={onTodoAdd}>
                    <Add />
                </IconButton>
            </Grid>
        </Box>
    )
}

TodosPanelView.propTypes = propTypes
