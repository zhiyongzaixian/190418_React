import React from 'react'
import axios from 'axios'
import {fetch} from 'whatwg-fetch'

class App extends React.Component {
  state = {
    loading: true,// 正在加载
    repName: '', // 仓库名字
    repUrl: '', // 仓库地址
  }
  constructor(props) {
    super(props);
  }
  
  componentDidMount() {
    // 发送请求
    let url = `https://api.github.com/search/repositories?q=r&sort=stars`
    // 方式一： 常规请求方式
    // axios.get(url)
    //   .then( (response) => {
    //     // handle success
    //     console.log(response.data.items);
    //     this.setState({
    //       loading: false,
    //       repName: response.data.items[0].name,
    //       repUrl: response.data.items[0].html_url,
    //     })
    //   })
    //   .catch(function (error) {
    //     // handle error
    //     console.log(error);
    //   })
      // .finally(function () {
      //   // always executed
      //   console.log('finally');
      // });
    
    // async、await方式
    // try {
    //   let result = await axios.get(url)
    //   console.log(result);
    //   this.setState({
    //     loading: false,
    //     repName: result.data.items[0].name,
    //     repUrl: result.data.items[0].html_url,
    //   })
    // }catch (error){
    //   console.log(error);
    // }
  
    fetch(url)
      .then(function(response) {
        return response.json()
      })
      .then((json) => {
        console.log('parsed json', json)
        this.setState({
          loading: false,
          repName: json.items[0].name,
          repUrl: json.items[0].html_url,
        })
      })
      .catch(function(ex) {
        console.log('parsing failed', ex)
      })
    
  }
  render () {
    let {repName, repUrl, loading} = this.state;
    if(loading){
      return (
        <div>
          <h1>loading...</h1>
        </div>
      );
    }else {
      return (
        <div>
          <h1>github仓库stars最多的： <a href={repUrl}>{repName}</a></h1>
        </div>
      );
    }
  }
  
}

export default App;