import React from 'react';
import { shallow } from 'enzyme';

import UserInfo from '../UserInfo';

describe('<UserInfo />', () => {
  let props;
  let component;

  beforeEach(() => {
    props = {
      userDetails: {
        owner: 'some owner',
        image: 'some image',
        gitHubUrl: 'some url',
      },
    };
    component = shallow(<UserInfo {...props} />);
  });

  it('should match with snapshot', () => {
    expect(component.debug()).toMatchSnapshot();
  });
});
