import { withTodosItem } from './withTodosItem'
import { CardItemView } from './cardItemView'

const TodosCardItem = withTodosItem(CardItemView)

export { TodosCardItem }
export default TodosCardItem
