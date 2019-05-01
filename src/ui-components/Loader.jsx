import React, { Fragment } from 'react';

import theme, { zIndex } from '../lib/theme';

const Loader = () => {
  return (
    <Fragment>
      <div className="loader-overlay">
        <div className="loader-container">
          <div className="loader" />
        </div>
      </div>
      <style jsx="true">
        {`
          .loader-overlay {
            position: fixed;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            background-color: ${theme.loaderOverlay};
            z-index: ${zIndex.loaderOverlay};
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .loader-container {
            width: 200px;
            height: 200px;
            border-radius: 8px;
            box-shadow: 0 2px 6px 0 ${theme.loaderBoxShadow};
            background-color: ${theme.white};
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .loader {
            border: 16px solid ${theme.grey1};
            border-top: 16px solid ${theme.primaryColor};
            border-radius: 50%;
            width: 120px;
            height: 120px;
            animation: spin 1.5s linear infinite;
          }

          @keyframes spin {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }
        `}
      </style>
    </Fragment>
  );
};

export default Loader;
