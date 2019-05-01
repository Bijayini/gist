import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import theme from '../lib/theme';

const BodyCopy = ({
  xs,
  xm,
  xl,
  children,
  variant,
  color,
  className,
  uppercase,
  styles,
}) => {
  const variantFor = () => {
    let variantStyles = `font-family: Lato, Sans-Serif;`;
    switch (variant) {
      case 'extra-bold':
        variantStyles += `font-weight: 900`;
        break;
      case 'regular':
        variantStyles += `font-weight: normal`;
        break;
      case 'light':
        variantStyles += `font-weight: 300`;
        break;
      case 'bold':
        variantStyles += `font-weight: 700`;
        break;
      case 'italic':
        variantStyles += `font-style: italic`;
        break;
      default:
        break;
    }
    return variantStyles;
  };

  function fontSize(level) {
    let fontSizes = '1rem';
    switch (level) {
      case '1':
        fontSizes = '1.125rem';
        break;
      case '2':
        fontSizes = '1rem';
        break;
      case '3':
        fontSizes = '0.875rem';
        break;
      case '4':
        fontSizes = '0.75rem';
        break;
      case '5':
        fontSizes = '0.5rem';
        break;
      case 'large':
        fontSizes = '1.25rem';
        break;
      case 'x-large':
        fontSizes = '1.375rem';
        break;
      default:
        fontSizes = '1rem';
        break;
    }
    return fontSizes;
  }

  return (
    <Fragment>
      <span
        className={`body-copy-${color}-${variant} body-xm body-xs body-xl ${
          className.length ? className : ''
        }`}
      >
        {children}
      </span>
      <style jsx="true">
        {`
          span {
           ${uppercase ? 'text-transform: uppercase;' : ''}
          }
          .body-copy-${color}-${variant} {
            ${variantFor()};
            color: ${theme[color]};
          }
          .body-xs {
            font-size: ${fontSize(xs)}
          }
          @media screen and (${theme.breakpoints.tablet}) {
            .body-xm {
              font-size: ${fontSize(xm)}
            }
          }
          @media screen and (${theme.breakpoints.desktop}) {
            .body-xl {
              font-size: ${fontSize(xl)}
            }
          }
        `}
      </style>
      {styles}
    </Fragment>
  );
};

BodyCopy.defaultProps = {
  xs: '',
  xm: '',
  xl: '',
  className: '',
  uppercase: false,
  styles: false,
};

BodyCopy.propTypes = {
  children: PropTypes.node.isRequired,
  /** Level 1..4 for mobile */
  xs: PropTypes.string,
  /** Level 1..4 for tablet */
  xm: PropTypes.string,
  /** Level 1..4 for desktop */
  xl: PropTypes.string,
  variant: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  className: PropTypes.string,
  uppercase: PropTypes.bool,
  styles: PropTypes.node,
};

export default BodyCopy;
