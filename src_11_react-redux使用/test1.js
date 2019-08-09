// 高阶函数
function fun1(a, b) {
  console.log(a);
  console.log(b);
}

fun1(1,2);
/*
* 高阶函数特点：
*   1. 将函数作为参数传递给另外一个函数进行加工
*   2. 返回值通常还是一个函数，是加工之后的函数
*
*
* */

function fun2(fn, a,b,c,d) {
  return function () {
    fn(a, b);
    console.log(c);
    console.log(d);
  }
}

let fn = fun2(fun1, 1,2,3,4);
fn();

// 高阶组件
/*
* 高阶组件：
*   将组件作为参数传递，加工生产一个新的组件，该组件是原来组件的增强版
* */

// 示例: 加工之后的增强版组件 = connect()(加工之前的组件)
var store = {
  counterReducer: counterReducer,
  state: null,
  getState: getState,
  dispatch: dispatch
}
// 初始化调用reducer获取初始化的state
store.state = store.counterReducer(0, {type: 'init'})

// this.props.store.getState();
function getState() {
  return this.state;
}

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

function incrementAction(value) {
  return {type: 'increment', data: value}
}

function dispatch(actionObj) {
  // 分发action，大白话： 将获取的action交给reducer，前提是调用reducer
  this.state = store.counterReducer(store.state, actionObj);
}

// dispatch(incrementAction(123))


export default store;