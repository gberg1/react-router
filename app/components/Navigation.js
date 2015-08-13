'use strict';

import _ from 'lodash';
import React from 'react';
import Router from 'react-router';

const NavLink = React.createClass({
  render: function() {
    let other = _.omit(this.props, 'to', 'other');
    let names = [].concat(this.props.to);

    let className = this.props.className || '';
    return (
      <Router.Link to={names[0]} className={className} {...other} />
    );
  }
});

const Navigation = React.createClass({
  render: function() {
    return (
      <nav>
        <NavLink to="home">Home</NavLink>
        <NavLink to="profile">Profile</NavLink>
        <NavLink to="feed">Feed</NavLink>
        <NavLink to="forum">Forum</NavLink>
        <NavLink to="add-place">AddPlace</NavLink>
      </nav>
    );
  }
});

export default Navigation;

