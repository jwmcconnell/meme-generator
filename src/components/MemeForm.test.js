/* eslint-disable no-console */
import React from 'react';
import { shallow } from 'enzyme';
import MemeForm from './MemeForm';

describe('MemeForm component', () => {
  it('renders MemeForm', () => {
    
    const updateFile = e => console.log(e.target.value);
    const handleUpdate = e => console.log(e.target.value);
    
    const wrapper = shallow(
      <MemeForm 
        updateFile={updateFile}
        handleUpdate={handleUpdate}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
  
