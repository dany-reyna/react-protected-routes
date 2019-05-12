import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import TopicsRoutes from '../../shared/routes/TopicsRoutes';
import topicsList from '../../data/topicsList';

const Topics = ({ match }) => (
  <div>
    <h1>Topics</h1>
    <ul>
      {topicsList.map(({ name, id }) => (
        <li>
          <Link to={`${match.url}/${id}`}>{name}</Link>
        </li>
      ))}
    </ul>

    <hr />

    <TopicsRoutes match={match} />
  </div>
);

Topics.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape,
    isExact: PropTypes.bool,
    path: PropTypes.string,
    url: PropTypes.string,
  }).isRequired,
};

export default Topics;
