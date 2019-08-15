import React from 'react';
import PropTypes from 'prop-types';
import styles from './Preview.css';

const Preview = ({ upload, url, option, topText, bottomText, fontSize, fontColor, fontFamily }) => {
  const textStyle = {
    fontSize: fontSize + 'px',
    fontFamily: fontFamily,
    color: fontColor
  };
  
  return (
    <section className={styles.Preview} id="preview">
      <img src={option === 'upload' ? upload : url} />
      <section className={styles.topText} style={textStyle}>{topText}</section>
      <section className={styles.bottomText} style={textStyle}>{bottomText}</section>
    </section>
  );
};

Preview.propTypes = {
  upload: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  option: PropTypes.string.isRequired,
  topText: PropTypes.string.isRequired,
  bottomText: PropTypes.string.isRequired,
  fontSize: PropTypes.string.isRequired,
  fontColor: PropTypes.string.isRequired,
  fontFamily: PropTypes.string.isRequired
};

export default Preview;
