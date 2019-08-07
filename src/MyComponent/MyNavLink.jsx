import React from 'react'
import {NavLink} from 'react-router-dom'

class MyNavLink extends React.Component {
  constructor(props){
    super(props);
    
  }
  
  render(){
    console.log(this.props);
    return (
      <NavLink className="list-group-item " activeClassName='demo' {...this.props}></NavLink>
    )
  }
}

export default MyNavLink;