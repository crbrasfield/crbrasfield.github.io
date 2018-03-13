import React from 'react';
// import classnames from 'classnames';
import './styles.css';
import { Link } from 'react-router-dom';

export default () =>
  <div className="header">
    <div className="navbar">
      <div className="logo">
        Chase Brasfield
      </div>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="about">About</Link>
        <Link to="contact">Contact</Link>
      </div>
    </div>
  </div>
