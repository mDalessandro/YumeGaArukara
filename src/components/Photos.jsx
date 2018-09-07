import React from 'react';
import PropTypes from 'prop-types';
import Photo from './Photo';

const Photos = ({ options }) => {
  const option = options[Math.floor(Math.random() * options.length)];

  return (
    <div className="photos">
      <Photo source={option.props.src} alt={option.props.alt} />
    </div>
  );
};

Photos.propTypes = {
  options: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default Photos;
