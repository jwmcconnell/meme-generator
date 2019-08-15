import React from 'react';
import PropTypes from 'prop-types';

import InputField from './InputField';

const MemeForm = ({ 
  updateFile,
  handleUpdate
}) => {

  const fieldsInfo = [
    { label: 'File Upload', type: 'file', update: updateFile },
    { label: 'URL', name: 'imageUrl', type: 'text', update: handleUpdate },
    { label: 'Top Text', name: 'topText', type: 'text', update: handleUpdate },
    { label: 'Bottom Text', name: 'bottomText', type: 'text', update: handleUpdate },
    { label: 'Font Size', name: 'fontSize', type: 'number', update: handleUpdate, min: '10', defaultValue: '26' },
    { label: 'Font Color', name: 'fontColor', type: 'color', update: handleUpdate, defaultValue: '#FFFFFF' },
  ];

  const fields = fieldsInfo.map(({ label, name, type, update, min, defaultValue }) => (
    <InputField 
      label={label} 
      type={type} 
      update={update} 
      name={name}
      min={min}
      defaultValue={defaultValue}
      key={`${label}-${type}-${update}`}
    />
  ));
  
  return (
    <section>
      {fields}

      <fieldset>
        <legend>Image Source</legend>

        <label htmlFor="upload">Upload
          <input 
            defaultChecked 
            required 
            name="imageOption" 
            value="upload" 
            type="radio" 
            id="upload"
            onChange={handleUpdate}
          />
        </label>

        <label htmlFor="url">URL
          <input 
            required 
            name="imageOption" 
            value="url" 
            type="radio" 
            id="url"
            onChange={handleUpdate}
          />
        </label>
            
      </fieldset>
    </section>
  );
};

MemeForm.propTypes = {
  updateFile: PropTypes.func.isRequired,
  handleUpdate: PropTypes.func.isRequired
};


export default MemeForm;
