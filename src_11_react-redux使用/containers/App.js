import {connect} from 'react-redux'
import App from '../components/app'
import {incrementAction, decrementAction, asyncIncrementAction} from '../redux/actions'


// 使用connect对UI组件进行包装，目的： 映射redux中的state和dispatch到UI组件的props中
//  connect(加工的内容)(加工的目标组件) = 加工UI组件之后的容器组件
// 当使用connect的时候只要把UI组件放入第二个调用实参位置，会自动向组件内部导入dispatch
// 当使用connect向UI组件内容导入action的时候dispatch哪去了？？？
// export default App;
export default connect(
  state => ({count: state}),
  {incrementAction, decrementAction, asyncIncrementAction}
)(App);