import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'

export function useActions(actions) {
    const dispatch = useDispatch()

    return bindActionCreators(actions, dispatch)
}
