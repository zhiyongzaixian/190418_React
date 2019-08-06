import React from 'react'

export default class CommentItem extends React.Component {
  constructor(props){
    super(props)
  }
  
  handleDelComment = () => {
    // 获取标识数据： index
    if(window.confirm(`你确认删除${this.props.commentItem.username} 的评论吗？？`)){
      this.props.del(this.props.index);
    }
  }
  render(){
    let {commentItem} = this.props;
    return (
      <li className="list-group-item">
        <div className="handle">
          <a onClick={this.handleDelComment} href="javascript:;">删除</a>
        </div>
        <p className="user"><span >{commentItem.username}</span><span>说:</span></p>
        <p className="centence">{commentItem.content}</p>
      </li>
    )
  }
}