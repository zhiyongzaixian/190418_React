import {connect} from 'react-redux'
import CommentsItem from '../components/CommentsItem/commentItem'
import {delCommentAction} from '../redux/actions'

export default connect(
  state => ({}),
  {delCommentAction}
)(CommentsItem);