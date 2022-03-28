import { TodosPanelView } from '../panel/todosPanelView'
import { useSelector } from 'react-redux'
import { useActions } from '../todosHooks'
import { getActionTodoText, getActionTodosAdd, getActionsTodosView } from '../todosActions'
import { filterAction } from '../todosReducers'

export function TodosPanel() {
    const todoText = useSelector((state) => state.todosText)
    const view = useSelector((state) => state.view)
    const {
        getActionTodoText: dispatchTodoText,
        getActionTodosAdd: dispatchTodosAdd,
        getActionsTodosView: dispatchTodosView,
        filterAction: dispatchFilter,
    } = useActions({
        getActionTodoText,
        getActionTodosAdd,
        getActionsTodosView,
        filterAction,
    })
    const handleTextChange = React.useCallback((event) => dispatchTodoText(event.target.value), [dispatchTodoText])
    const handleFilterChange = React.useCallback((event) => dispatchFilter(event.target.value), [dispatchFilter])
    const handleTodoAdd = React.useCallback(() => dispatchTodosAdd(), [dispatchTodosAdd])
    const handleEnterPress = React.useCallback(
        (event) => {
            const ENTER = 13
            event.keyCode === ENTER && dispatchTodosAdd()
        },
        [dispatchTodosAdd],
    )
    const handleViewChange = React.useCallback(() => {
        dispatchTodosView()
    }, [dispatchTodosView])

    return (
        <TodosPanelView
            todoText={todoText}
            view={view}
            onTodoAdd={handleTodoAdd}
            onTextChange={handleTextChange}
            onFilterChange={handleFilterChange}
            onEnterPress={handleEnterPress}
            onViewChange={handleViewChange}
        />
    )
}
