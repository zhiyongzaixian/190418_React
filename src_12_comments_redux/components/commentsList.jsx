import React from 'react'
import CommentItem from '../containers/CommentItem'

export default class CommentsList extends React.Component {
  constructor(props){
    super(props)
  }
  render(){
    let {commentsListArr} = this.props;
    let display = commentsListArr.length?'none':'block';
    return (
      <div className="col-md-8">
        <h3 className="reply">评论回复：</h3>
        <h2 style={{display}}>暂无评论，点击左侧添加评论！！！</h2>
        <ul className="list-group">
          {
            commentsListArr.map((item, index) => {
              return <CommentItem key={index} commentItem={item} index={index} del={this.props.del}/>
            })
          }
        </ul>
      </div>
    )
  }
}