/* eslint-disable no-console */
import React from 'react';
import { shallow } from 'enzyme';
import InputField from './InputField';

describe('InputField component', () => {
  it('renders InputField', () => {
    
    const update = e => console.log(e.target.value);
    
    const wrapper = shallow(
      <InputField 
        label='someLabel'
        name='someName'
        type='text'
        update={update}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
  
