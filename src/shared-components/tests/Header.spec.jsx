import React from 'react';
import { shallow } from 'enzyme';

import Header from '../Header';

describe('<Header />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<Header />);
  });

  it('should match with snapshot', () => {
    expect(component.debug()).toMatchSnapshot();
  });
});
