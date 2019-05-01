import React from 'react';
import { shallow } from 'enzyme';

import GistList from '../GistList';

describe('<GistList />', () => {
  let props;
  let component;

  beforeEach(() => {
    props = {
      gistDetails: [
        {
          id: 'some id',
          forks: [],
          tags: ['some tag'],
        },
        {
          id: 'some id2',
          forks: ['some url1'],
          tags: [],
        },
      ],
    };
    component = shallow(<GistList {...props} />);
  });

  it('should match with snapshot', () => {
    expect(component.debug()).toMatchSnapshot();
  });
});
