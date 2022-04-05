import { PanelView } from './panelView'
import { useAppDispatch, useAppSelector } from '../hooks'
import { filterAction, viewAction, addAction, textAction } from '../slices'

export function Panel() {
    const todoText = useAppSelector((state) => state.todosText)
    const view = useAppSelector((state) => state.view)
    const dispatch = useAppDispatch()

    const handleTextChange = React.useCallback(
        (event: React.ChangeEvent<HTMLInputElement>) => dispatch(textAction(event.target.value)),
        [dispatch],
    )
    const handleFilterChange = React.useCallback(
        (event: React.ChangeEvent<HTMLInputElement>) => dispatch(filterAction(event.target.value)),
        [dispatch],
    )
    const handleTodoAdd = React.useCallback(() => dispatch(addAction()), [dispatch])
    const handleEnterPress = React.useCallback(
        (event: React.KeyboardEvent<HTMLInputElement>) => {
            const ENTER = 13
            if (event.keyCode === ENTER) {
                dispatch(addAction())
            }
        },
        [dispatch],
    )
    const handleViewChange = React.useCallback(() => {
        dispatch(viewAction())
    }, [dispatch])

    return (
        <PanelView
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
