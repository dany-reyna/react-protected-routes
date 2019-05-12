import React from 'react';
import PropTypes from 'prop-types';
import topicsList from '../../data/topicsList';

const Resource = ({ match }) => {
  const topic = topicsList
    .find(({ id }) => id === match.params.topicId)
    .resources.find(({ id }) => id === match.params.subId);

  return (
    <div>
      <h3>{topic.name}</h3>
      <p>{topic.description}</p>
      <a href={topic.url}>More info.</a>
    </div>
  );
};

Resource.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape,
    isExact: PropTypes.bool,
    path: PropTypes.string,
    url: PropTypes.string,
  }).isRequired,
};

export default Resource;
