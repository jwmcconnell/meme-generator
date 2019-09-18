import React from 'react';
import PropTypes from 'prop-types';

const Download = ({ downloadMeme }) => {
  return <button onClick={downloadMeme}>Download</button>;
};

Download.propTypes = {
  downloadMeme: PropTypes.func.isRequired
};

export default Download;
