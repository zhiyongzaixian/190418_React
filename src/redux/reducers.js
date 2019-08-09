import {ADDCOMMENT, DELCOMMENT} from './actions-type'

// 设置state的初始值
let commentsList = [
  {username: '山西人2', content: '我们有煤矿'},
  {username: '雄安人2', content: '我在雄安有两亩地'}
];

function commentsReducer(state=commentsList, action) {
  switch (action.type){
    case ADDCOMMENT:
      // 在redux中不能直接修改原来的state
      // state.unshift(action.data)
      return [action.data, ...state];
    case DELCOMMENT:
      // action.data = index;
      // state.splice(action.data, 1);
      let newState = [...state];
      newState.splice(action.data, 1);
      return newState;
    default:
      return state;
  }
}


export default commentsReducer;