import {connect} from 'react-redux';
import List from '../components/list'


export default connect(
  state => ({...state.searchUsersReducer})
)(List);