import React from 'react'
import { List, Grid, Skeleton, ListSubheader } from '@mui/material'
import { TodosListItem } from './todosListItem'

const TodosCardItem = React.lazy(() => import('./todosCardItem'))

const propTypes = {
    todos: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired,
            isChecked: PropTypes.bool.isRequired,
        }),
    ),
    view: PropTypes.oneOf(['card', 'text']),
}
export function TodosListView({ todos, view }) {
    const renderChild = React.useCallback(({ id }) => {
        return <TodosListItem key={id} id={id} />
    }, [])
    const renderContent = React.useCallback(() => {
        if (view === 'text') {
            const canRender = Array.isArray(todos) && todos.length

            if (!canRender) {
                return null
            }

            return (
                <List
                    sx={{
                        p: 0,
                    }}
                    subheader={<ListSubheader component="div">Todos list</ListSubheader>}
                    dense={true}
                >
                    {todos.map(renderChild)}
                </List>
            )
        }

        return todos.map((todo) => (
            <React.Suspense
                key={todo.id}
                fallback={<Skeleton variant="rectangular" width={160} height={144} sx={{ m: 2 }} />}
            >
                <TodosCardItem id={todo.id} />
            </React.Suspense>
        ))
    }, [renderChild, todos, view])

    return (
        <Grid container spacing={0} alignItems="center" direction={'row'} justifyContent={'center'}>
            {renderContent()}
        </Grid>
    )
}

TodosListView.propTypes = propTypes
