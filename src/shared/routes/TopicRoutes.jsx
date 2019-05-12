import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import Resource from '../../components/Resource/Resource';

const TopicRoutes = ({ match }) => <Route path={`${match.path}/:subId`} component={Resource} />;

TopicRoutes.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape,
    isExact: PropTypes.bool,
    path: PropTypes.string,
    url: PropTypes.string,
  }).isRequired,
};

export default TopicRoutes;
