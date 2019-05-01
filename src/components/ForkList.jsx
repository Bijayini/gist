import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import theme from '../lib/theme';

const ForkList = ({ forks }) => {
  return (
    <Fragment>
      <div className="fork-container">
        {forks.map(fork => (
          <div className="avatar" key={fork}>
            <img src={fork} alt="image" className="fork" />
          </div>
        ))}
      </div>
      <style jsx="true">
        {`
          .fork-container {
            display: flex;
          }
          .avatar {
            background: ${theme.grey1};
            margin-right: 5px;
            width: 30px;
            height: 30px;
          }
          .fork {
            max-width: 100%;
            border-radius: 3px;
          }
        `}
      </style>
    </Fragment>
  );
};

ForkList.propTypes = {
  forks: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ForkList;
