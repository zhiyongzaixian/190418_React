import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension'
import counterReducer from './reducers'

// 1. 创建store对象
const store = createStore(counterReducer, composeWithDevTools(applyMiddleware(thunk)));

// 2. 暴露store对象
export default store;