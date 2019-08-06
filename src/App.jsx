import React from 'react'
import Search from './components/Search'
import List from './components/List'

import './app.css'

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  
  componentDidMount() {
    
    
  }
  render () {
    return (
      <div className="container">
        <Search />
        <List />
        
      </div>
    )
  }
  
}

export default App;