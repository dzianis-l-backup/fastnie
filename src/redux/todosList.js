import { TodosListView } from './todosListView'
import { useSelector } from 'react-redux'
import { createSelector } from 'reselect'

function getTodos(state) {
    return state.todos
}
function getFilter(state) {
    return state.filter
}
const todosSelector = createSelector([getTodos, getFilter], (todos, filter) => {
    return filter
        ? todos.filter((todo) => {
              return filter.split(/\s+/).find((filterPiece) => todo.text.includes(filterPiece))
          })
        : todos
})

export function TodosList() {
    const store = useSelector((state) => state)
    const nextTodos = todosSelector(store)

    return <TodosListView todos={nextTodos} />
}
