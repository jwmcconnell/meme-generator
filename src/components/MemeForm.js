import React from 'react';
import PropTypes from 'prop-types';

const MemeForm = ({ updateFile, updateUrl, updateTopText, updateBottomText, updateImageOption }) => {
  return (
    <section>

      <label>File Upload:
        <input type="file" onChange={updateFile} />
      </label>

      <label>URL:
        <input type="text" onChange={updateUrl} />
      </label>

      <label>Top Text:
        <input type="text" onChange={updateTopText} />
      </label>

      <label>Bottom Text:
        <input type="text" onChange={updateBottomText} />
      </label>

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

    </section>
  );
};

MemeForm.propTypes = {
  updateFile: PropTypes.func.isRequired,
  updateUrl: PropTypes.func.isRequired,
  updateTopText: PropTypes.func.isRequired,
  updateBottomText: PropTypes.func.isRequired,
  updateImageOption: PropTypes.func.isRequired
};


export default MemeForm;
