import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import PrivateAppRoutes from '../shared/routes/PrivateAppRoutes';
import Header from '../shared/components/Header/Header';
import SignOutButton from './SignOutButton/SignOutButton';
import Nav from '../shared/components/Nav/Nav';

const PrivateApp = ({ match }) => (
  <Fragment>
    <Header />
    <SignOutButton />
    <Nav match={match} />
    <PrivateAppRoutes match={match} />
  </Fragment>
);

PrivateApp.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape,
    isExact: PropTypes.bool,
    path: PropTypes.string,
    url: PropTypes.string,
  }).isRequired,
};

export default PrivateApp;
