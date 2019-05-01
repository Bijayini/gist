import React from 'react';
import { shallow } from 'enzyme';

import TagList from '../TagList';

describe('<TagList />', () => {
  let props;
  let component;

  beforeEach(() => {
    props = {
      tags: ['some tag', 'some tag2'],
    };
    component = shallow(<TagList {...props} />);
  });

  it('should match with snapshot', () => {
    expect(component.debug()).toMatchSnapshot();
  });
});
