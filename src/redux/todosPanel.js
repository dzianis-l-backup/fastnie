import { TodosPanelView } from './todosPanelView'
import { useSelector } from 'react-redux'
import { useActions } from './todosHooks'
import { getActionTodoText, getActionTodosAdd, getActionTodoFilter } from './todosActions'

export function TodosPanel() {
    const todoText = useSelector((state) => state.todosText)
    const {
        getActionTodoText: dispatchTodoText,
        getActionTodosAdd: dispatchTodosAdd,
        getActionTodoFilter: dispatchTodoFilter,
    } = useActions({
        getActionTodoText,
        getActionTodosAdd,
        getActionTodoFilter,
    })
    const handleTextChange = React.useCallback((event) => dispatchTodoText(event.target.value), [dispatchTodoText])
    const handleFilterChange = React.useCallback(
        (event) => dispatchTodoFilter(event.target.value),
        [dispatchTodoFilter],
    )
    const handleTodoAdd = React.useCallback(() => dispatchTodosAdd(), [dispatchTodosAdd])
    const handleEnterPress = React.useCallback(
        (event) => {
            const ENTER = 13
            event.keyCode === ENTER && dispatchTodosAdd()
        },
        [dispatchTodosAdd],
    )

    return (
        <TodosPanelView
            todoText={todoText}
            onTodoAdd={handleTodoAdd}
            onTextChange={handleTextChange}
            onFilterChange={handleFilterChange}
            onEnterPress={handleEnterPress}
        />
    )
}
