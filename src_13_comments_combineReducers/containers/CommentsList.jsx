import {connect} from 'react-redux'
import CommentsList from '../components/commentsList'

// 包装UI组件成为容器组件
export default connect(
  state => ({commentsListArr: state.commentsReducer})
)(CommentsList);