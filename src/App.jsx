import React from 'react'
import axios from 'axios'

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  
  componentDidMount() {
    // 发送请求
    let url = `https://api.github.com/search/repositories?q=r&sort=stars`
    axios.get(url)
      .then(function (response) {
        // handle success
        console.log(response.data.items);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      // .finally(function () {
      //   // always executed
      //   console.log('finally');
      // });
  }
  render () {
    return (
      <div>
        <h1>App应用， 主组件</h1>
      </div>
    );
  }
}

export default App;