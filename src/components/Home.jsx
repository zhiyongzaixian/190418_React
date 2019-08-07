import React from 'react'
import {Route, Switch, NavLink, Redirect} from 'react-router-dom'
import News from './News'
import Message from './Message'

class Home extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render () {
    return (
      <div>
        <h2>Home 组件内容</h2>
        <div>
          <ul className="nav nav-tabs">
            <li>
              {/*<a className="list-group-item active" href="./home-news.html">News</a>*/}
              <NavLink className="list-group-item" activeClassName='demo' to='/home/news'>News</NavLink>
            </li>
            <li>
              {/*<a className="list-group-item " href="./home-message.html">Message</a>*/}
              <NavLink className="list-group-item" activeClassName='demo' to='/home/message'>Message</NavLink>
            </li>
          </ul>
          <Switch>
            <Route path='/home/news' component={News}></Route>
            <Route path='/home/message' component={Message}></Route>
            <Redirect to='/home/news'></Redirect>
          </Switch>
          
        </div>
      </div>
    );
  }
}
Home.propTypes = {

};

export default Home;