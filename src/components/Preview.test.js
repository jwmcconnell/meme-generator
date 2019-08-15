import React from 'react';
import { shallow } from 'enzyme';
import Preview from './Preview';

describe('Preview component', () => {
  it('renders Preview', () => {
    const state = {
      topText: '',
      bottomText: '',
      fontSize: '26',
      fontColor: '#000000',
      imagePath: '',
      imageUrl: '',
      imageOption: 'upload'
    };
    const wrapper = shallow(
      <Preview 
        upload={state.imagePath} 
        url={state.imageUrl} 
        option={state.imageOption}
        topText={state.topText}
        bottomText={state.bottomText}
        fontSize={state.fontSize}
        fontColor={state.fontColor}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
  
