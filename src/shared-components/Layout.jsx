/* eslint-disable import/no-named-as-default */
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import Header from './Header';

const Layout = ({ children }) => (
  <Fragment>
    <Header />
    <div className="main-layout">{children}</div>
    <style jsx="true" global="true">
      {`
        @font-face {
          font-family: Lato, sans-serif;
          font-display: swap;
        }
        html {
          height: 100%;
          font-size: 16px;
        }
        body {
          margin: 0;
        }

        dl,
        dt,
        dd,
        ul,
        ol {
          list-style-type: none;
          padding: 0;
          margin: 0;
        }
        p {
          margin: 0;
          padding: 0;
        }
        a {
          background-color: transparent;
          text-decoration: none;
        }
        button,
        input {
          font-family: inherit;
          font-size: 100%;
          line-height: 1.15;
          margin: 0;
        }
        html,
        body {
          -webkit-box-sizing: border-box;
          -moz-box-sizing: border-box;
          box-sizing: border-box;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
        input[type='text']::-ms-clear {
          display: none;
        }
        * {
          box-sizing: border-box;
        }
      `}
    </style>
  </Fragment>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
