import { TodosPanelView } from './todosPanelView'
import { useSelector } from 'react-redux'
import { useActions } from './todosHooks'
import { getActionTodoText, getActionTodosAdd } from './todosActions'

export function TodosPanel() {
    const todoText = useSelector((state) => state.todosText)
    const { getActionTodoText: dispatchTodoText, getActionTodosAdd: dispatchTodosAdd } = useActions({
        getActionTodoText,
        getActionTodosAdd,
    })
    const handleTextChange = React.useCallback(
        (event) => {
            const value = event.target.value

            dispatchTodoText(value)
        },
        [dispatchTodoText],
    )
    const handleTodoAdd = React.useCallback(() => {
        dispatchTodosAdd()
    }, [dispatchTodosAdd])

    return <TodosPanelView todoText={todoText} onTodoAdd={handleTodoAdd} onHandleTextChange={handleTextChange} />
}
