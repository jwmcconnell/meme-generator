import React from 'react';
import PropTypes from 'prop-types';
import styles from './Preview.css';

const Preview = ({ upload, url, option, topText, bottomText }) => {
  return (
    <section className={styles.Preview}>
      <img src={option === 'upload' ? upload : url} />
      <section className={styles.topText}>{topText}</section>
      <section className={styles.bottomText}>{bottomText}</section>
    </section>
  );
};

Preview.propTypes = {
  upload: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  option: PropTypes.string.isRequired,
  topText: PropTypes.string.isRequired,
  bottomText: PropTypes.string.isRequired
};

export default Preview;
