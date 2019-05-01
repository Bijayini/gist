import React from 'react';
import { shallow } from 'enzyme';

import { Error } from '../Error';

describe('<Error />', () => {
  let props;
  let component;

  beforeEach(() => {
    props = {
      loader: {
        showLoader: true,
        updateShowLoader: jest.fn(),
      },
    };
    component = shallow(<Error {...props} />);
  });

  it('should match with snapshot and should hide loader if loader is present', () => {
    expect(component.debug()).toMatchSnapshot();

    expect(props.loader.updateShowLoader).toHaveBeenCalledWith(false);
  });
});
