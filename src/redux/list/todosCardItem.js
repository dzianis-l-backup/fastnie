import { withTodosItem } from './withTodosItem'
import { TodosCardItemView } from './todosCardItemView'

const TodosCardItem = withTodosItem(TodosCardItemView)

export { TodosCardItem }
export default TodosCardItem
