/* eslint-disable react/button-has-type */
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import theme from '../lib/theme';

const Button = ({
  children,
  type,
  size,
  variant,
  handleClick,
  styles,
  className,
}) => {
  const getClassname = () =>
    `button ${size}-button ${variant}-button ${className} `;
  return (
    <Fragment>
      <button type={type} onClick={handleClick} className={getClassname()}>
        {children}
      </button>
      <style jsx="true">
        {`
          .button {
            font-family: Lato, Sans-Serif;
            font-weight: normal;
            font-size: 1.125rem;
            outline: none;
            border-radius: 3px;
            text-align: center;
            border: 0 none;
            cursor: pointer;
          }

          .primary-button {
            background-color: ${theme.primaryColor};
            color: ${theme.white};
            border: 1px solid ${theme.primaryColor};
          }

          .secondary-button {
            background-color: ${theme.white};
            color: ${theme.primaryColor};
            border: 1px solid ${theme.primaryColor};
          }

          .large-button {
            width: 100%;
            max-width: 300px;
            height: 42px;
            display: block;
            margin: 0 auto;
          }

          .small-button {
            font-size: 20px;
            padding: 6px 18px;
          }
        `}
      </style>
      {styles}
    </Fragment>
  );
};

Button.defaultProps = {
  type: 'button',
  variant: 'primary',
  className: '',
  styles: false,
};

Button.propTypes = {
  variant: PropTypes.string,
  handleClick: PropTypes.func.isRequired,
  type: PropTypes.string,
  size: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  styles: PropTypes.node,
  className: PropTypes.string,
};

export default Button;
