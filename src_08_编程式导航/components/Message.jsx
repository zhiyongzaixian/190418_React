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
  
  handlePush = (path) => {
    // 请求路由地址
    this.props.history.push(path);
  }
  handleReplace = (path) => {
    // 请求路由地址
    this.props.history.replace(path);
  }
  handleGoBack =() => {
    this.props.history.goBack();
  }
  
  handleHistoryRoute =(path, methods) => {
    if(methods === 'push'){
      this.props.history.push(path);
    }else if(methods === 'replace'){
      this.props.history.replace(path);
    }else {
      this.props.history.goBack();
    }
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
                  <Link to={`/home/message/messageDetail/${item.id}`}>{item.content}</Link> ----
                  {/*<button onClick={this.handlePush.bind(this, path)}>点击push</button> ----*/}
                  <button onClick={() => this.handleHistoryRoute(`/home/message/messageDetail/${item.id}`, 'push')}>点击push</button> ----
                  <button onClick={this.handleHistoryRoute.bind(this, `/home/message/messageDetail/${item.id}`, 'replace')}>点击replace</button>
                </li>
              )
            })
          }
        </ul>
        <button onClick={this.handleHistoryRoute}>回退</button>
        {/*<div>三级路由内容</div>*/}
        <Route path='/home/message/messageDetail/:id' component={MessageDetail}></Route>
      </div>
    );
  }
}
Message.propTypes = {

};

export default Message;