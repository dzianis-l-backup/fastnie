import React from 'react'
import { List } from '@mui/material'
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
}

TodosListView.propTypes = propTypes
