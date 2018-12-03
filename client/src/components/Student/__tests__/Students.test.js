import React from 'react';
import { shallow } from 'enzyme';
import Students from '../Students';

describe('Students', () => {
  it('should render correctly without students', () => {
    const component = shallow(<Students />);
  
    expect(component).toMatchSnapshot();
  });
  
  it('should render correctly with students', () => {

  	const st = [{id:1, name: "gabriel"},{id:2, name:"matias"}];

    const component = shallow(<Students students={st}/>);
  
    expect(component).toMatchSnapshot();
  });
});