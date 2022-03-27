import { createSelector } from 'reselect'

function getTodos(state) {
    return state.todos
}
function getFilter(state) {
    return state.filter
}

export const todosSelector = createSelector(
    [getTodos, getFilter],
    (todos, filter) => {
        return filter
            ? todos.filter((todo) => {
                  return filter.split(/\s+/).find((filterPiece) => todo.text.includes(filterPiece))
              })
            : todos
    },
    {
        memoizeOptions: {
            maxSize: 10,
        },
    },
)
