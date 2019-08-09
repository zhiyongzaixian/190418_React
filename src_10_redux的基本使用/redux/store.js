import {createStore} from 'redux'
import counterReducer from './reducers'

// 1. 创建store对象
const store = createStore(counterReducer);

// 2. 暴露store对象
export default store;