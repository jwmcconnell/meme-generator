import React from 'react';
import PropTypes from 'prop-types';

const InputField = ({ label, name, type, update, defaultValue, min }) => {
  return (
    <label>{label}
      <input 
        type={type} 
        onChange={update} 
        name={name ? name : undefined}
        defaultValue={defaultValue ? defaultValue : undefined}
        min={min ? min : undefined}
      />
    </label>
  );
};

InputField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string,
  type: PropTypes.string.isRequired,
  update: PropTypes.func.isRequired,
  defaultValue: PropTypes.string,
  min: PropTypes.string
};

export default InputField;
