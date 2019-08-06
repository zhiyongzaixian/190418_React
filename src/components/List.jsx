import React from 'react'
import Item from './Item'

class List extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render () {
    return (
      <div className="row">
        <Item />
      </div>
    );
  }
}
List.propTypes = {

};

export default List;