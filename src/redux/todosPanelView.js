import { Box, Grid, IconButton, TextField } from '@mui/material'
import { Add } from '@mui/icons-material'

const propTypes = {
    onTextChange: PropTypes.func,
    onFilterChange: PropTypes.func,
    onTodoAdd: PropTypes.func,
    onEnterPress: PropTypes.func,
    todoText: PropTypes.string,
}
export function TodosPanelView({ onTextChange, onFilterChange, onTodoAdd, onEnterPress, todoText }) {
    return (
        <Box sx={{ display: 'inline-block', border: '2px solid #89b0f0', borderRadius: '10px', p: 2 }}>
            <Grid container spacing={0} direction="row" alignItems="end" justifyContent="center">
                <TextField
                    variant="standard"
                    label="Todo task"
                    value={todoText}
                    sx={{ mr: 1 }}
                    onChange={onTextChange}
                    onKeyDown={onEnterPress}
                />
                <IconButton color="primary" onClick={onTodoAdd}>
                    <Add />
                </IconButton>
            </Grid>
            <TextField variant="standard" label="Filter" sx={{ mr: 1 }} onChange={onFilterChange} />
        </Box>
    )
}

TodosPanelView.propTypes = propTypes
