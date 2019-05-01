import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import routePaths from '../lib/routePaths';
import theme from '../lib/theme';

import BodyCopy from '../ui-components/BodyCopy';

import labels from './labels/Header.lables';

const Header = () => (
  <Fragment>
    <header className="header">
      <Link to={routePaths.HOME}>
        <BodyCopy
          variant="extra-bold"
          xs="x-large"
          xm="x-large"
          xl="x-large"
          color="white"
        >
          {labels.github}
          &nbsp;
        </BodyCopy>
        <BodyCopy
          variant="regular"
          xs="x-large"
          xm="x-large"
          xl="x-large"
          color="white"
        >
          {labels.gist}
        </BodyCopy>
      </Link>
    </header>
    <style jsx="true">
      {`
        .header {
          background: ${theme.primaryColor};
          padding: 20px;
        }
      `}
    </style>
  </Fragment>
);
export default Header;
