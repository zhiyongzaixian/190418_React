import React from 'react'

class MessageDetail extends React.Component {
  state = {
    messageDetails : [
      {id: 1, title: 'Message001', content: '我爱你, 中国'},
      {id: 2, title: 'Message003', content: '我爱你, 老婆'},
      {id: 3, title: 'Message006', content: '我爱你, 孩子'},
      {id: 4, title: 'Message006', content: '我爱你, 0218'},
    ]
  }
  constructor(props) {
    super(props);
  }
  
  render () {
    let {id} = this.props.match.params;
    let detailObj = this.state.messageDetails.find((item, index) => item.id === id*1);
    console.log(detailObj);
    return (
      <div>
        <p>MessageDetail 组件内容</p>
        <p>id: {detailObj.id}</p>
        <p>title: {detailObj.title}</p>
        <p>content: {detailObj.content}</p>
      
      </div>
    );
  }
}
MessageDetail.propTypes = {

};

export default MessageDetail;