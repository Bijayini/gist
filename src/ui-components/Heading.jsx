import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import theme from '../lib/theme';

const Heading = ({ text, level, variant, color, className, styles }) => {
  const cssClassName = `level-${level}-${color}-${variant} ${className || ''}`;

  const fontVariant = () => {
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
      default:
        break;
    }
    return variantStyles;
  };
  return (
    <Fragment>
      {level === '1' && <h1 className={cssClassName}>{text}</h1>}
      {level === '2' && <h2 className={cssClassName}>{text}</h2>}
      {level === '3' && <h3 className={cssClassName}>{text}</h3>}
      <style jsx="true">
        {`
          h1,
          h2,
          h3,
          h4,
          h5 {
            margin: 0;
            padding: 0;
            font-size: 10em;
          }
          .level-1-${color}-${variant} {
            font-size: 1.25rem;
            ${fontVariant()};
            color: ${theme[color]};
          }
          .level-2-${color}-${variant} {
            font-size: 1.125rem;
            ${fontVariant()};
            color: ${theme[color]};
          }
          .level-3-${color}-${variant} {
            font-size: 0.875rem;
            ${fontVariant()};
            color: ${theme[color]};
          }

          @media screen and (${theme.breakpoints.tablet}) {
            .level-1-${color}-${variant} {
              font-size: 1.375rem;
            }
            .level-2-${color}-${variant} {
              font-size: 1.25rem;
            }
            .level-3-${color}-${variant} {
              font-size: 0.875rem;
            }
          }
        `}
      </style>
      {styles}
    </Fragment>
  );
};

Heading.defaultProps = {
  level: '1',
  variant: '',
  color: 'textColor',
  className: '',
  styles: false,
};

Heading.propTypes = {
  text: PropTypes.string.isRequired,
  level: PropTypes.string,
  variant: PropTypes.string,
  color: PropTypes.string,
  className: PropTypes.string,
  styles: PropTypes.node,
};

export default Heading;
