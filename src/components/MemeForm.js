import React from 'react';
import PropTypes from 'prop-types';

import InputField from './InputField';

const MemeForm = ({ 
  updateFile, 
  updateUrl, 
  updateTopText, 
  updateBottomText, 
  updateImageOption,
  updateFontSize,
  updateFontColor
}) => {

  const fieldsInfo = [
    { label: 'File Upload', type: 'file', update: updateFile },
    { label: 'URL', type: 'text', update: updateUrl },
    { label: 'Top Text', type: 'text', update: updateTopText },
    { label: 'Bottom Text', type: 'text', update: updateBottomText },
  ];

  const fields = fieldsInfo.map(({ label, type, update }) => (
    <li key={`${label}-${type}-${update}`}>
      <InputField label={label} type={type} update={update} />
    </li>
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
            name="file-source" 
            value="upload" 
            type="radio" 
            id="upload"
            onChange={updateImageOption}
          />
        </label>

        <label htmlFor="url">URL
          <input 
            required 
            name="file-source" 
            value="url" 
            type="radio" 
            id="url"
            onChange={updateImageOption}
          />
        </label>
            
      </fieldset>

      <label>Font Size
        <input type="number" min="10" defaultValue="26" onChange={updateFontSize}/>
      </label>

      <label>Font Color
        <input type="color" defaultValue='#FFFFFF' onChange={updateFontColor}/>
      </label>

    </section>
  );
};

MemeForm.propTypes = {
  updateFile: PropTypes.func.isRequired,
  updateUrl: PropTypes.func.isRequired,
  updateTopText: PropTypes.func.isRequired,
  updateBottomText: PropTypes.func.isRequired,
  updateImageOption: PropTypes.func.isRequired,
  updateFontSize: PropTypes.func.isRequired,
  updateFontColor: PropTypes.func.isRequired
};


export default MemeForm;
