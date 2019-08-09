// 1. 定义reducers
/*
* 本质： 方法
* 作用：
*   1. 服务store对象, 为store对象提供初始化state状态值
*   2. 帮助store对象修改state的状态值
*   3. 数据源需要通过actions获取
*   4. 修改完的数据交给store对象的state中
*
*   action = {data: 最新的数据， type: 修改数据的类型(如何修改数据)}
* */

// switch (匹配的条件){
//   case 匹配的条件:
//     执行语句
//   case 匹配的条件:
//     执行语句
// }

function counterReducer(state=0, action) {
  console.log('counterReducer()', state, action);
  // 修改状态
  switch (action.type){
    case 'increment':
     // 原有的state数据  + action.data
      return state + action.data;
    case 'decrement':
      return state - action.data;
    default:
      return state
  }
}

export default counterReducer;