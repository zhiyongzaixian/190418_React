import React from 'react'
import Search from './components/Search'
import List from './components/List'

import './app.css'

class App extends React.Component {
  state = {
    searchContent: ''
  }
  constructor(props) {
    super(props);
  }
  
  componentDidMount() {
    
    
  }
  
  getSearchContent = (searchContent) => {
    this.setState({
      searchContent
    })
  }
  render () {
    return (
      <div className="container">
        <Search getSearchContent={this.getSearchContent}/>
        <List searchContent={this.state.searchContent}/>
        
      </div>
    )
  }
  
}

export default App;