import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import theme from '../lib/theme';

const Input = ({ placeholder, onInputChange, value, id, hasError }) => (
  <Fragment>
    <input
      type="text"
      id={id}
      value={value}
      onChange={event => onInputChange(event)}
      placeholder={placeholder}
      className={hasError && 'hasError'}
      autoComplete="off"
    />
    <style jsx="true">
      {`
        input {
          width: 100%;
          border: 1px solid ${theme.border};
          border-radius: 3px;
          padding: 5px 10px;
          font-size: 22px;
          outline: none;
          font-family: Lato;
          font-weight: 900;
        }
        input.hasError {
          border-color: ${theme.warningMessageColor};
        }
        input::placeholder {
          font-family: Lato;
          font-size: 16px;
          color: ${theme.grey4};
        }
      `}
    </style>
  </Fragment>
);

Input.defaultProps = {
  id: '',
  hasError: false,
};

Input.propTypes = {
  placeholder: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  id: PropTypes.string,
  hasError: PropTypes.bool,
};

export default Input;
