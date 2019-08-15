import React from 'react';
import PropTypes from 'prop-types';

const InputField = ({ label, type, update }) => {
  return (
    <label>{label}
      <input type={type} onChange={update} />
    </label>
  );
};

InputField.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  update: PropTypes.func.isRequired
};

export default InputField;
