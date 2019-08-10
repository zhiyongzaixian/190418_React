import {connect} from 'react-redux';
import {asyncSearch} from '../store/actions'
import Search from '../components/search'


export default connect(
  state =>({}),
  {asyncSearch}
)(Search);