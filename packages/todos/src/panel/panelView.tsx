import { Box, Grid, IconButton, TextField, Button } from '@mui/material'
import { Add } from '@mui/icons-material'
import { TodoText, View } from '../store'

export function PanelView({
    onTextChange,
    onViewChange,
    onFilterChange,
    onTodoAdd,
    onEnterPress,
    todoText,
    view,
}: {
    onTextChange: (event: React.ChangeEvent<HTMLInputElement>) => void
    onViewChange: React.MouseEventHandler<HTMLButtonElement>
    onFilterChange: React.ChangeEventHandler<HTMLInputElement>
    onTodoAdd: React.MouseEventHandler<HTMLButtonElement>
    onEnterPress: React.KeyboardEventHandler<HTMLInputElement>
    todoText: TodoText
    view: View
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
                    key="textField"
                    variant="standard"
                    label="Todo task"
                    value={todoText}
                    sx={{ mr: 1 }}
                    onChange={onTextChange}
                    onKeyDown={onEnterPress}
                />,
                <IconButton key="addTodo" color="primary" onClick={onTodoAdd}>
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
