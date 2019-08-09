import React from 'react'
// import {incrementAction, decrementAction} from '../redux/actions'

class App extends React.Component {
  // state = {
  //   count: 0
  // }
  constructor(props) {
    super(props);
  }
  
  componentDidMount() {
    // console.log(this.props.store.getState());
  }
  
  increment = () => {
    // 1.  获取select的value值
    let value = this.refs.selectDOM.value*1;
    // 2. 生成action对象
    // let actionObj = incrementAction(value);
    // 3. 分发action，本质：调用reducer，将action对象传给reducer
    // this.props.store.dispatch(actionObj)
    // this.setState({
    //   count: this.state.count + value
    // })
    // 2.分发action
    this.props.incrementAction(value);
  }
  
  
  decrement = () => {
    // 1.  获取select的value值
    let value = this.refs.selectDOM.value*1;
    // // 2. 累加
    // this.setState({
    //   count: this.state.count - value
    // })
    // 2. 分发action
    // this.props.store.dispatch(decrementAction(value));
    this.props.decrementAction(value);
  }
  
  handleOddIncrement = () => {
    // 1. 判断当前state的count是否是基数
    // let count = this.props.store.getState();
    let count = this.props.count;
    if(count % 2 !== 0){
      // this.increment();
      // this.props.store.dispatch(incrementAction(count))
      this.props.incrementAction(count);
    }
  }
  
  handleAsyncIncrement = () => {
    setTimeout(() => {
      this.increment();
    }, 2000)
  }
  render () {
    // 从redux的store对象中获取state的值
    // let count = this.props.store.getState();
    let count = this.props.count;
    return (
      <div>
        <input type="text"/>
        <h3>counter: {count}</h3>
        <select ref='selectDOM'>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
        &nbsp;&nbsp;
        <button onClick={this.increment}> + </button>&nbsp;&nbsp;
        <button onClick={this.decrement}> - </button>&nbsp;&nbsp;
        <button onClick={this.handleOddIncrement}> increment if odd </button>&nbsp;&nbsp;
        <button onClick={this.handleAsyncIncrement}> increment async </button>&nbsp;&nbsp;
      </div>
    );
  }
}
App.propTypes = {
  
};

export default App;