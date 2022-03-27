export const ACTIONS = {
    TODOS_ADD: 'todos/add',
    TODOS_TOGGLE: 'todos/toggle',
    FILTER: 'FILTER',
    TODOS_TEXT: 'todo/text',
}

function getActionTemplate(type, payload) {
    return { type, payload }
}

export function getActionTodoText(text) {
    return getActionTemplate(ACTIONS.TODOS_TEXT, text)
}

export function getActionTodoFilter(text) {
    return getActionTemplate(ACTIONS.FILTER, text)
}

export function getActionTodosAdd() {
    return getActionTemplate(ACTIONS.TODOS_ADD)
}

export function getActionsTodosToggle(id, isChecked) {
    return getActionTemplate(ACTIONS.TODOS_TOGGLE, { id, isChecked })
}
