import React from 'react';
import { shallow } from 'enzyme';

import Layout from '../Layout';

describe('<Layout />', () => {
  let component;

  beforeEach(() => {
    component = shallow(
      <Layout>
        <span>Some data</span>
      </Layout>,
    );
  });

  it('should match with snapshot', () => {
    expect(component.debug()).toMatchSnapshot();
  });
});
