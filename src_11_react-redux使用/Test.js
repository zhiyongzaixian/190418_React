import React from 'react'
import {incrementAction} from './redux/actions'

class Test extends React.Component {
  constructor(props) {
    super(props);
  }
  increment = () => {
    let num = 5;
    this.props.store1.dispatch(incrementAction(num))
    console.log(this.props.store1.state);
  }
  render () {
    let count = this.props.store1.getState();
    return (
      <div>
        <h2>TEST组件</h2>
        <h2>{count}</h2>
        <button onClick={this.increment}>+ </button>
      </div>
    );
  }
}
Test.propTypes = {
  
};

export default Test;