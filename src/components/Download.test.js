/* eslint-disable no-console */
import React from 'react';
import { shallow } from 'enzyme';
import Download from './Download';

describe('Download component', () => {
  it('renders Download', () => {
    
    const downloadMeme = e => console.log(e.target.value);
    
    const wrapper = shallow(
      <Download 
        downloadMeme={downloadMeme}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
  
