import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import TopicRoutes from '../../shared/routes/TopicRoutes';
import topicsList from '../../data/topicsList';

const Topic = ({ match }) => {
  const topic = topicsList.find(({ id }) => id === match.params.topicId);

  return (
    <div>
      <h2>{topic.name}</h2>
      <p>{topic.description}</p>

      <ul>
        {topic.resources.map(sub => (
          <li>{<Link to={`${match.url}/${sub.id}`}>{sub.name}</Link>}</li>
        ))}
      </ul>

      <hr />

      <TopicRoutes match={match} />
    </div>
  );
};

Topic.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape,
    isExact: PropTypes.bool,
    path: PropTypes.string,
    url: PropTypes.string,
  }).isRequired,
};

export default Topic;
