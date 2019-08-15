import React from 'react';
import PropTypes from 'prop-types';

const InputField = ({ label, type, update, defaultValue, min }) => {
  return (
    <label>{label}
      <input 
        type={type} 
        onChange={update} 
        defaultValue={defaultValue ? defaultValue : undefined}
        min={min ? min : undefined}
      />
    </label>
  );
};

InputField.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  update: PropTypes.func.isRequired,
  defaultValue: PropTypes.string,
  min: PropTypes.string
};

export default InputField;
