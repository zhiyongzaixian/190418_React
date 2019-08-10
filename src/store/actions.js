// 定义actions
import axios from 'axios';
import {LOADING, SUCCESS, ERROR} from './actions-type'

//  同步action
//  loading
export const loadingAction = () => ({type: LOADING})

// success
export const successAction = (usersArr) => ({type: SUCCESS, data: usersArr})

//  error
export const errorAction = () => ({type: ERROR})
// 异步action

export const asyncSearch = function (searchContent) {
  return async dispatch => {
    // 执行异步操作
    // 发请求
    let url = `https://api.github.com/search/users?q=${searchContent}`;
    // 分发loading的action
    dispatch(loadingAction())
    try{
      let result = await axios.get(url)
      dispatch(successAction(result.data.items))
    }catch (error){
      // 捕获错误，分发同步的action(error)
      dispatch(errorAction());
    }
  }
}