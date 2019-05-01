import React from 'react';
import { shallow } from 'enzyme';

import Input from '../Input';

describe('<Input />', () => {
  const props = {
    placeholder: 'some placeholder',
    onInputChange: jest.fn(),
    value: 'some value',
    border: '#f0f0f0f',
  };
  it('should match with snapshot', () => {
    const component = shallow(<Input {...props} />);

    expect(component.debug()).toMatchSnapshot();
  });

  it('should call handleChange on change in input', () => {
    const component = shallow(<Input {...props} />);
    const input = component.find('input');

    input.simulate('change', { target: { value: 5 } });

    expect(props.onInputChange).toHaveBeenCalledWith({ target: { value: 5 } });
  });

  it('should render has error when there is an error', () => {
    props.hasError = true;
    const component = shallow(<Input {...props} />);
    const inputWithError = component.find('.hasError');

    expect(inputWithError).toHaveLength(1);
  });
});
