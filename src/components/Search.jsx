import React from 'react'

class Search extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render () {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">Search Github Users</h3>
        <div>
          <input type="text" placeholder="enter the name you search"/>
          <button>Search</button>
        </div>
      </section>
    );
  }
}
Search.propTypes = {

};

export default Search;