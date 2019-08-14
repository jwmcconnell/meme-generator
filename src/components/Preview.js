import React from 'react';
import PropTypes from 'prop-types';

const Preview = ({ image }) => {
  return <img src={image} />;
};

Preview.propTypes = {
  image: PropTypes.string.isRequired
};

export default Preview;
