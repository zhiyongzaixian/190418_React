import React from 'react'
import {Link} from 'react-router-dom'

class Message extends React.Component {
  state = {
    messageArr: []
  }
  constructor(props) {
    super(props);
  }
  
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        messageArr: ['消息01','消息02','消息03']
      })
    }, 1000)
  }
  
  render () {
    return (
      <div>
        Message 组件内容
        <ul>
          {
            this.state.messageArr.map((item,  index) => {
              return (
                <li key={index}>
                  <Link to='/about'>{item}</Link>
                </li>
              )
            })
          }
        </ul>
      </div>
    );
  }
}
Message.propTypes = {

};

export default Message;