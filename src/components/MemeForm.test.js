/* eslint-disable no-console */
import React from 'react';
import { shallow } from 'enzyme';
import MemeForm from './MemeForm';

describe('MemeForm component', () => {
  it('renders MemeForm', () => {
    
    const updateFile = e => console.log(e.target.value);
    const updateUrl = e => console.log(e.target.value);
    const updateImageOption = e => console.log(e.target.value);
  
    const updateTopText = e => console.log(e.target.value);
    const updateBottomText = e => console.log(e.target.value);
  
    const updateFontSize = e => console.log(e.target.value);
    const updateFontColor = e => console.log(e.target.value);
    
    const wrapper = shallow(
      <MemeForm 
        updateFile={updateFile}
        updateUrl={updateUrl}
        updateImageOption={updateImageOption}
        updateTopText={updateTopText}
        updateBottomText={updateBottomText}
        updateFontSize={updateFontSize}
        updateFontColor={updateFontColor}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
  
