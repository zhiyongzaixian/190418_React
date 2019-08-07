import React from 'react'
import PubSub from 'pubsub-js'
import MyPubSub from './MyPubSub'

class Search extends React.Component {
  constructor(props) {
    super(props);
  }
  myRefs = React.createRef()
  handleSearch = () => {
    //  1. 收集关键字数据
    let searchContent = this.myRefs.current.value;
    // 验证输入的内容是否合法
    if(!searchContent.trim()){
      alert('输入的内容不能为空');
      return;
    }
    // 2. 将数据传到App中
    // this.props.getSearchContent(searchContent);
    // 2. 发布消息
    // PubSub.publish('msg', searchContent);
    MyPubSub.publish('msg', searchContent);
    // 3. 清空搜索内容
    this.myRefs.current.value = '';
  }
  render () {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">Search Github Users</h3>
        <div>
          <input ref={this.myRefs}  type="text" placeholder="enter the name you search"/>
          <button onClick={this.handleSearch}>Search</button>
        </div>
      </section>
    );
  }
}
Search.propTypes = {

};

export default Search;