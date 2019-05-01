import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import routePaths from '../lib/routePaths';

import BodyCopy from '../ui-components/BodyCopy';

import labels from './labels/Home.lables';

const Home = () => (
  <Fragment>
    <div className="home-page">
      <Link to={routePaths.GISTS}>
        <BodyCopy
          variant="extra-bold"
          xs="x-large"
          xm="x-large"
          xl="x-large"
          color="grey1"
        >
          {labels.welcome_message}
          &nbsp; &#x2192;
        </BodyCopy>
      </Link>
    </div>
    <style jsx="true">
      {`
        .home-page {
          text-align: center;
          margin-top: 200px;
        }
      `}
    </style>
  </Fragment>
);
export default Home;
