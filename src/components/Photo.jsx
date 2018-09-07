import React from 'react';
import PropTypes from 'prop-types';

const Photo = ({ source, alt }) => <img className="photo" src={source} alt={alt} />;

Photo.propTypes = {
  source: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default Photo;
