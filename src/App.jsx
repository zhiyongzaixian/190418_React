import React from 'react'

class App extends React.Component {
  state = {
    count: 0
  }
  constructor(props) {
    super(props);
  }
  increment = () => {
    // 1.  获取select的value值
    let value = this.refs.selectDOM.value*1;
    // 2. 累加
    this.setState({
      count: this.state.count + value
    })
  }
  
  
  decrement = () => {
    // 1.  获取select的value值
    let value = this.refs.selectDOM.value*1;
    // 2. 累加
    this.setState({
      count: this.state.count - value
    })
  }
  
  handleOddIncrement = () => {
    // 1. 判断当前state的count是否是基数
    let count = this.state.count;
    if(count % 2 !== 0){
      this.increment();
    }
  }
  
  handleAsyncIncrement = () => {
    setTimeout(() => {
      this.increment();
    }, 2000)
  }
  render () {
    return (
      <div>
        <h3>counter: {this.state.count}</h3>
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