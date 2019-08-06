import React from 'react'

class Item extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render () {
    return (
      <div className="card">
        <a href="https://github.com/reactjs" target="_blank">
          <img src="https://avatars.githubusercontent.com/u/6412038?v=3" style={{width: '100px'}}/>
        </a>
        <p className="card-text">reactjs</p>
      </div>
    );
  }
}
Item.propTypes = {

};

export default Item;