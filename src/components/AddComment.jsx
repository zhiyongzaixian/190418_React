import React from 'react'

export default class AddComment extends React.Component {
  constructor(props){
    super(props)
  }
  
  handleAddComment = () => {
    // 1. 收集数据
    let username = this.refs.usernameDOM.value;
    let content = this.refs.commentDOM.value;
      // 验证数据是否合法
    if(!username.trim() || !content.trim()){
      alert('请输入合法的内容');
      return;
    }
    // 2. 将数据交给App组件
    this.props.add({username, content});
    // 3. 清空表单相数据
    this.refs.usernameDOM.value = ''
    this.refs.commentDOM.value = ''
  }
  render(){
    return (
      <div className="col-md-4">
        <form className="form-horizontal">
          <div className="form-group">
            <label>用户名</label>
            <input ref='usernameDOM' type="text" className="form-control" placeholder="用户名" />
          </div>
          <div className="form-group">
            <label>评论内容</label>
            <textarea ref='commentDOM' className="form-control" rows="6" placeholder="评论内容"></textarea>
          </div>
          <div className="form-group">
            <div className="col-sm-offset-2 col-sm-10">
              <button onClick={this.handleAddComment} type="button" className="btn btn-default pull-right">提交</button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}