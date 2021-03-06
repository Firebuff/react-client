import { createStore, applyMiddleware } from 'redux'

import thunk from 'redux-thunk' //使用插件，可以异步

import { composeWithDevTools } from 'redux-devtools-extension'

// 引入reducers
import reducers from './reducers'

export default createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))