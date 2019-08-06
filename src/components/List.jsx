import React from 'react'
import Item from './Item/Item'
import axios from  'axios'

class List extends React.Component {
  state = {
    usersArr: [],
    firstView: true,
    loading: false,
    error: null
  }
  constructor(props) {
    super(props);
  }
  
  async componentWillReceiveProps(nextProps) {
    // 当父组件的状态数据发生变化的时候才会调用
    console.log('------- componentWillReceiveProps ----------');
    // 组件挂载完毕
    // console.log(this.props);
    // console.log(nextProps);
    let searchContent = nextProps.searchContent;
    
    // 准备url
    let url = `sdfhttps://api.github.com/search/users?q=${searchContent}`;
    
    // 发送请求获取对应的用户数据
    // axios.get(url) // resolve(response);
    //   .then((response) => {
    //     console.log(response);
    //   });
    // 修改状态值： firstView ---> loading
    this.setState({
      firstView: false,
      loading: true,
      usersArr: []
    })
    
    try{
      let result = await axios.get(url);
      this.setState({
        usersArr: result.data.items,
        loading: false
      })
    }catch (error){
      console.log(error);
      this.setState({
        error: error,
        loading: false
      })
    }
  }
  render () {
    let {firstView, loading, usersArr, error}  = this.state;
    if(firstView){
      return <p>请在上方输入用户名，随后点击搜索</p>
    }else if(loading){
      return <p>loading...</p>
    }else if(usersArr.length){
      return (
        <div className="row">
          {
            this.state.usersArr.map((item, index) => {
              return <Item key={index} userItem={item}/>
            })
          }
        </div>
      );
    }else if(error){
      return <p>暂时没有匹配到用户，请重新匹配</p>
    }else {
      return '123'
    }
  }
}
List.propTypes = {

};

export default List;