import React from 'react';
import PropTypes from 'prop-types';
import styles from './Preview.css';

const Preview = ({ upload, url, option }) => {
  return (
    <section className={styles.Preview}>
      <img src={option === 'upload' ? upload : url} />
    </section>
  );
};

Preview.propTypes = {
  upload: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  option: PropTypes.string.isRequired
};

export default Preview;
