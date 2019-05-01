import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import theme from '../lib/theme';
import BodyCopy from './BodyCopy';

const WarningMessage = ({ text }) => {
  return (
    <Fragment>
      <div className="warning-message">
        <BodyCopy
          xs="3"
          xm="3"
          xl="3"
          color="warningMessageColor"
          variant="italic"
        >
          {text}
        </BodyCopy>
      </div>
      <style jsx="true">
        {`
          .warning-message {
            background: ${theme.warningMessageBg};
            padding: 10px;
            text-align: center;
          }
        `}
      </style>
    </Fragment>
  );
};

WarningMessage.propTypes = {
  text: PropTypes.string.isRequired,
};

export default WarningMessage;
