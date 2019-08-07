import React from 'react'
import {Route, Link, NavLink, Redirect, Switch} from 'react-router-dom'
import About from './components/About'
import Home from './components/Home'
import Test from './components/Test'
import MyNavLink from './MyComponent/MyNavLink'

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
              {/*<NavLink className="list-group-item " activeClassName='demo' to='/about'>About</NavLink>*/}
              {/*<NavLink className="list-group-item " activeClassName='demo' to='/home'>Home</NavLink>*/}
              <MyNavLink to='/about' ><span>About</span></MyNavLink>
              <MyNavLink to='/home' >Home</MyNavLink>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                {/*注册路由，通过访问注册路由，请求对应的路由组件*/}
                  
                  {/*<Switch>*/}
                    {/*/!*<Route exact path='/' component={Test}></Route>*!/*/}
                    {/*<Route path='/about' component={About}></Route>*/}
                    {/*<Route path='/home' component={Home}></Route>*/}
                    {/*<Redirect from='/ccc' to='/about'></Redirect>*/}
                  {/*</Switch>*/}
  
                {/*问题： Redirect能不能放在路由的上边*/}
                  {/*<Route exact path='/' component={Test}></Route>*/}
                <Switch>
                  <Route  path='/about' component={About}></Route>
                  <Route  path='/home' component={Home}></Route>
                  <Redirect from='/' to='/about'></Redirect>
                </Switch>
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