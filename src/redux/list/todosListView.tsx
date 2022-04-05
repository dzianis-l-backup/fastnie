import { List, Grid, Skeleton, ListSubheader } from '@mui/material'
import { TodosListItem } from './listItem'
import { Todos, View } from '../store'

const TodosCardItem = React.lazy(() => import('./cardItem'))
const Suspense = React.Suspense

export function TodosListView({ todos, view }: { todos: Todos; view: View }) {
    const hasTodos = Array.isArray(todos) && !!todos.length

    return (
        <Grid container spacing={0} alignItems="center" direction={'row'} justifyContent={'center'}>
            {view === 'text' && hasTodos && (
                <List
                    sx={{
                        p: 0,
                    }}
                    subheader={<ListSubheader component="div">Todos list</ListSubheader>}
                    dense={true}
                >
                    {todos.map(({ id }) => {
                        return <TodosListItem key={id} id={id} />
                    })}
                </List>
            )}

            {view === 'card' &&
                hasTodos &&
                todos.map((todo) => (
                    <Suspense
                        key={todo.id}
                        fallback={<Skeleton variant="rectangular" width={160} height={144} sx={{ m: 2 }} />}
                    >
                        <TodosCardItem id={todo.id} />
                    </Suspense>
                ))}
        </Grid>
    )
}
