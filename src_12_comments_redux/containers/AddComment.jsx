import {connect} from 'react-redux'
import {addCommentAction} from '../redux/actions'
import AddComment from '../components/addComment'

export default connect(
  state => ({}),
  {addCommentAction}
)(AddComment);