import React from 'react';
import PropTypes from 'prop-types';

const Preview = ({ upload, url, option }) => {
  return (
    <img src={option === 'upload' ? upload : url} />
  );
};

Preview.propTypes = {
  upload: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  option: PropTypes.string.isRequired
};

export default Preview;
