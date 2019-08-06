import React from 'react'
import './Item.css'
class Item extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render () {
    let {userItem} = this.props;
    return (
      <div className="card">
        <a href={userItem.html_url} target="_blank">
          <img src={userItem.avatar_url} style={{width: '100px'}}/>
        </a>
        <p className="card-text">{userItem.login}</p>
      </div>
    );
  }
}
Item.propTypes = {

};

export default Item;