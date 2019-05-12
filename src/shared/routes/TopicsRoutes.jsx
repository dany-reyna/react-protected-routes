import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import Topic from '../../components/Topic/Topic';

const TopicsRoutes = ({ match }) => <Route path={`${match.path}/:topicId`} component={Topic} />;

TopicsRoutes.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape,
    isExact: PropTypes.bool,
    path: PropTypes.string,
    url: PropTypes.string,
  }).isRequired,
};

export default TopicsRoutes;
