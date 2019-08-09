// actions: 提供最新的数据的，是store对象唯一的数据源
/*
* action本质： 对象
* 定义的时候需要定义成方法
*
* */

// 累加的action
export const incrementAction = (number) => ({type: 'increment', data: number})

// 累减的action
export const decrementAction = (number) => ({type: 'decrement', data: number})