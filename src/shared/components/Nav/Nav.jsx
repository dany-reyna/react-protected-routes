import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Nav = ({ match }) => (
  <ul>
    <li>
      <Link to={match.url}>Home</Link>
    </li>
    <li>
      <Link to={`${match.url}/topics`}>Topics</Link>
    </li>
  </ul>
);

Nav.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape,
    isExact: PropTypes.bool,
    path: PropTypes.string,
    url: PropTypes.string,
  }).isRequired,
};

export default Nav;
