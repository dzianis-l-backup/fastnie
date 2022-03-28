import { Box, Grid, IconButton, TextField, Button } from '@mui/material'
import { Add } from '@mui/icons-material'

const propTypes = {
    onTextChange: PropTypes.func,
    onFilterChange: PropTypes.func,
    onTodoAdd: PropTypes.func,
    onEnterPress: PropTypes.func,
    onViewChange: PropTypes.func,
    todoText: PropTypes.string.isRequired,
    view: PropTypes.string.isRequired,
}
export function TodosPanelView({
    onTextChange,
    onViewChange,
    onFilterChange,
    onTodoAdd,
    onEnterPress,
    todoText,
    view,
}) {
    const renderRow = React.useCallback((...items) => {
        return (
            <Grid container spacing={0} direction="row" alignItems="end" justifyContent="flex-start">
                {items}
            </Grid>
        )
    }, [])

    return (
        <Box sx={{ display: 'inline-block', border: '2px solid #89b0f0', borderRadius: '10px', p: 2 }}>
            {renderRow(
                <TextField
                    variant="standard"
                    label="Todo task"
                    value={todoText}
                    sx={{ mr: 1 }}
                    onChange={onTextChange}
                    onKeyDown={onEnterPress}
                />,
                <IconButton color="primary" onClick={onTodoAdd}>
                    <Add />
                </IconButton>,
            )}
            <Box sx={{ mb: 1 }} component={'div'}>
                <TextField variant="standard" label="Filter" sx={{ mr: 1 }} onChange={onFilterChange} />
            </Box>
            <Button onClick={onViewChange} sx={{ textTransform: 'unset' }} variant="outlined">
                To {view === 'card' ? 'Text' : 'Cards'} View
            </Button>
        </Box>
    )
}

TodosPanelView.propTypes = propTypes
