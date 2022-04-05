import { App as AppRedux } from './redux/app'

function init() {
    ReactDOM.render(<AppRedux />, document.querySelector('#app'))
}

init()
