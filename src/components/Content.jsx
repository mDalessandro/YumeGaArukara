import React from 'react';
import PropTypes from 'prop-types';

const Content = ({ children }) => <div className="content">{children}</div>;

Content.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default Content;
