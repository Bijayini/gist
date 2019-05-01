import React from 'react';
import { shallow } from 'enzyme';

import Heading from '../Heading';

describe('<Heading />', () => {
  let props;
  let component;

  beforeEach(() => {
    props = {
      variant: 'extra-bold',
      text: 'Hello',
      level: '1',
    };
  });

  it('should match with snapshot with level 1 and extra-bold variant', () => {
    component = shallow(<Heading {...props} />);
    expect(component.debug()).toMatchSnapshot();
  });

  it('should match with snapshot with level 2 and regular variant', () => {
    props.level = '2';
    props.variant = 'regular';
    component = shallow(<Heading {...props} />);
    expect(component.debug()).toMatchSnapshot();
  });

  it('should match with snapshot with level 3 and light variant', () => {
    props.level = '3';
    props.variant = 'light';
    component = shallow(<Heading {...props} />);
    expect(component.debug()).toMatchSnapshot();
  });

  it('should match with snapshot with level 3 and bold variant', () => {
    props.level = '3';
    props.variant = 'bold';
    component = shallow(<Heading {...props} />);
    expect(component.debug()).toMatchSnapshot();
  });

  it('should match with snapshot with level 3 and default variant', () => {
    props.level = '3';
    props.variant = '';
    component = shallow(<Heading {...props} />);
    expect(component.debug()).toMatchSnapshot();
  });
});
