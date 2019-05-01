import React from 'react';
import { shallow } from 'enzyme';

import WarningMessage from '../WarningMessage';

describe('<WarningMessage />', () => {
  it('should match with snapshot', () => {
    const text = 'random text';

    const warningComponent = shallow(<WarningMessage text={text} />)

    expect(warningComponent.debug()).toMatchSnapshot();
  });
});
