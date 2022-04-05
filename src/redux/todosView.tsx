import { Container, Grid, Box, Typography, CircularProgress } from '@mui/material'
import { Panel } from './panel/panel'
import { TodosList } from './list/todosList'

interface PropTypes {
    isLoading: boolean
}

export function TodosView({ isLoading }: PropTypes) {
    return (
        <Container>
            <Grid container spacing={0} direction="column" alignItems="center" justifyContent="center">
                <Box component="div" sx={{ mt: 1, mb: 1 }}>
                    <Typography variant="h5" component="h1">
                        📝 Todos
                    </Typography>
                </Box>
                <Grid container spacing={0} direction="row" alignItems="center" justifyContent="center">
                    <Panel />
                </Grid>
                {isLoading ? <CircularProgress /> : <TodosList />}
            </Grid>
        </Container>
    )
}
