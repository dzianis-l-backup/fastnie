import React from 'react'
import { List } from '@mui/material'
import { TodosListItem } from './todosListItem'

const propTypes = {
    todos: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired,
            isChecked: PropTypes.bool.isRequired,
        }),
    ),
}
export function TodosListView({ todos }) {
    const renderChild = React.useCallback(({ id }) => {
        return <TodosListItem key={id} id={id} />
    }, [])

    const canRender = Array.isArray(todos) && todos.length

    if (!canRender) {
        return null
    }

    return <List dense={true}>{todos.map(renderChild)}</List>
}

TodosListView.propTypes = propTypes
