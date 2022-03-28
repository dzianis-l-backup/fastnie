import React from 'react'
import { List, Grid } from '@mui/material'
import { TodosListItem } from './todosListItem'
// import TodosCardItem from './todosCardItem'

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
            <React.Suspense key={todo.id} fallback={'Loading...'}>
                <TodosCardItem id={todo.id} />
            </React.Suspense>
        ))
    }, [renderChild, todos, view])

    const gridProps =
        view === 'card'
            ? {
                  direction: 'row',
                  justifyContent: 'flex-start',
              }
            : {
                  direction: 'column',
                  justifyContent: 'flex-start',
              }

    return (
        <Grid container spacing={0} alignItems="center" {...gridProps}>
            {renderContent()}
        </Grid>
    )
}

TodosListView.propTypes = propTypes
