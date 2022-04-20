import React, { Component } from 'react';

class MainContainer extends Component {
  constructor(props) {
    super(props);
  }

  //on ocmponent mounting I need to feth trhe data from the database

  render() {
    return (
      <div className='container'>
        <h1>Jewelry Store</h1>
        <p>THIS IS THE CONTAINER</p>
      </div>
    );
  }
}

export default MainContainer;
