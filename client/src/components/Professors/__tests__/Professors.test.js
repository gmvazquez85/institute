import React from 'react';
import { shallow } from 'enzyme';
import Professors from '../Professors';

describe('Professors', () => {
  it('should render correctly without professors', () => {
    const component = shallow(<Professors />);
  
    expect(component).toMatchSnapshot();
  });
  
  it('should render correctly with professors', () => {

  	const professors = [{id:1, name: "gabriel"},{id:2, name:"matias"}];

    const component = shallow(<Professors professors={professors}/>);
  
    expect(component).toMatchSnapshot();
  });
});