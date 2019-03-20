import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <div>
          <ul>
            <Link to="/">Home</Link>
            <Link to="/create">Create</Link>
          </ul>
      </div>
    )
  }
}
export default Header;
