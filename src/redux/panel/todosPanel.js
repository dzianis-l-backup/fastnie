import { TodosPanelView } from '../panel/todosPanelView'
import { useSelector } from 'react-redux'
import { useActions } from '../todosHooks'
import { filterAction, viewAction, addAction, textAction } from '../todosReducers'

export function TodosPanel() {
    const todoText = useSelector((state) => state.todosText)
    const view = useSelector((state) => state.view)
    const {
        addAction: dispatchAdd,
        textAction: dispatchText,
        viewAction: dispatchView,
        filterAction: dispatchFilter,
    } = useActions({
        addAction,
        textAction,
        viewAction,
        filterAction,
    })
    const handleTextChange = React.useCallback((event) => dispatchText(event.target.value), [dispatchText])
    const handleFilterChange = React.useCallback((event) => dispatchFilter(event.target.value), [dispatchFilter])
    const handleTodoAdd = React.useCallback(() => dispatchAdd(), [dispatchAdd])
    const handleEnterPress = React.useCallback(
        (event) => {
            const ENTER = 13
            event.keyCode === ENTER && dispatchAdd()
        },
        [dispatchAdd],
    )
    const handleViewChange = React.useCallback(() => {
        dispatchView()
    }, [dispatchView])

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
