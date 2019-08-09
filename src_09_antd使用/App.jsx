import React from 'react'
import { Button, DatePicker, Alert   } from 'antd';
// import 'antd/dist/antd.css'

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  handleClick(){
    alert('xxx');
  }
  render () {
    return (
      <div>
        <h1>App组件。。。</h1>
        <Button onClick={this.handleClick} type="primary">Primary</Button>
        <Button>Default</Button>
        <Button type="dashed">Dashed</Button>
        <Button type="danger">Danger</Button>
        <Button type="link">Link</Button>
        <DatePicker  />
        <Alert message="Success Text" type="warning"/>
      </div>
    );
  }
}
App.propTypes = {
  
};

export default App;