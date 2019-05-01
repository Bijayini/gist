import React from 'react';
import { shallow } from 'enzyme';

import ForkList from '../ForkList';

describe('<ForkList />', () => {
  let props;
  let component;

  beforeEach(() => {
    props = {
      forks: ['some value1', 'some value2'],
    };
    component = shallow(<ForkList {...props} />);
  });

  it('should match with snapshot', () => {
    expect(component.debug()).toMatchSnapshot();
  });
});
