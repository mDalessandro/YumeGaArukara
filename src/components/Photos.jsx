import React from 'react';
import PropTypes from 'prop-types';
import Photo from './Photo';

const Photos = ({ options }) => {
  const option = options[Math.floor(Math.random() * options.length)];

  return (
    <div className="photos">
      <Photo source={option.src} alt={option.alt} />
    </div>
  );
};

Photos.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string,
      alt: PropTypes.string,
    })
  ).isRequired,
};

export default Photos;
