import React from 'react';
import { shallow } from 'enzyme';

import Home from '../Home';

describe('<Home />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<Home />);
  });

  it('should match with snapshot', () => {
    expect(component.debug()).toMatchSnapshot();
  });
});
