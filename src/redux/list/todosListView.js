import React from 'react'
import { List, Grid, CircularProgress } from '@mui/material'
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

            return <List dense={true}>{todos.map(renderChild)}</List>
        }

        return todos.map((todo) => (
            <React.Suspense
                key={todo.id}
                fallback={
                    <Grid alignItems="flex-start" direction={'row'} justifyContent={'center'}>
                        <CircularProgress color="success" />
                    </Grid>
                }
            >
                <TodosCardItem id={todo.id} />
            </React.Suspense>
        ))
    }, [renderChild, todos, view])

    return (
        <Grid container spacing={0} alignItems="center" direction={'row'} justifyContent={'flex-start'}>
            {renderContent()}
        </Grid>
    )
}

TodosListView.propTypes = propTypes
