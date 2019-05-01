import React from 'react';
import { shallow } from 'enzyme';

import BodyCopy from '../BodyCopy';

describe('<BodyCopy />', () => {
  let props;
  let component;

  beforeEach(() => {
    props = {
      variant: '',
      color: 'white',
      className: 'random',
    };
  });

  it('should match with snapshot with level 3 and italic variant', () => {
    props.xs = '3';
    component = shallow(<BodyCopy {...props}> Hello </BodyCopy>);
    expect(component.debug()).toMatchSnapshot();
  });

  it('should match with snapshot with level 1 and extra-bold variant', () => {
    props.xs = '1';
    props.variant = 'extra-bold';
    component = shallow(<BodyCopy {...props}> Hello </BodyCopy>);
    expect(component.debug()).toMatchSnapshot();
  });

  it('should match with snapshot with level 2 and regular variant', () => {
    props.xs = '2';
    props.variant = 'regular';
    component = shallow(<BodyCopy {...props}> Hello </BodyCopy>);
    expect(component.debug()).toMatchSnapshot();
  });

  it('should match with snapshot with level 4 and light variant', () => {
    props.xs = '4';
    props.variant = 'light';
    component = shallow(<BodyCopy {...props}> Hello </BodyCopy>);
    expect(component.debug()).toMatchSnapshot();
  });

  it('should match with snapshot with level large and bold variant', () => {
    props.xs = 'large';
    props.variant = 'bold';
    component = shallow(<BodyCopy {...props}> Hello </BodyCopy>);
    expect(component.debug()).toMatchSnapshot();
  });

  it('should match with snapshot with level 5 and italic variant', () => {
    props.xs = '5';
    props.variant = 'italic';
    component = shallow(<BodyCopy {...props}> Hello </BodyCopy>);
    expect(component.debug()).toMatchSnapshot();
  });
});
