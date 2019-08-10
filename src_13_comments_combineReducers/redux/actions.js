import {ADDCOMMENT, DELCOMMENT} from './actions-type'
// 分析你的行为有哪些

// 添加: 往数组中添加一个对象
export const addCommentAction = (commentObj) => ({type: ADDCOMMENT, data: commentObj})

// 删除: index
export const delCommentAction = (index) => ({type: DELCOMMENT, data: index})
