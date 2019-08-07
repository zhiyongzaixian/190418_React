import React from 'react'
import {Route, Link} from 'react-router-dom'
import About from './components/About'
import Home from './components/Home'

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render () {
    return (
      <div>
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <div className="page-header"><h2>React Router Demo</h2></div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
              {/*<a className="list-group-item active" href="/about">About</a>*/}
              {/*<a className="list-group-item" href="/home">Home</a>*/}
              <Link className="list-group-item active" to='/about'>About</Link>
              <Link className="list-group-item" to='/home'>Home</Link>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                {/*注册路由，通过访问注册路由，请求对应的路由组件*/}
                <Route path='/about' component={About}></Route>
                <Route path='/home' component={Home}></Route>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
App.propTypes = {
};

export default App;