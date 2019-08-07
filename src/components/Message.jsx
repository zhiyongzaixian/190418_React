import React from 'react'
import {Link, Route} from 'react-router-dom'
import MessageDetail from './MessageDetail'

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
        messageArr: [
          {id:1,content:'消息1'},
          {id:2,content:'消息2'},
          {id:3,content:'消息3'},
          {id:4,content:'消息4'},
        ]
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
                  <Link to={`/home/message/messageDetail/${item.id}`}>{item.content}</Link>
                </li>
              )
            })
          }
        </ul>
        {/*<div>三级路由内容</div>*/}
        <Route path='/home/message/messageDetail/:id' component={MessageDetail}></Route>
      </div>
    );
  }
}
Message.propTypes = {

};

export default Message;