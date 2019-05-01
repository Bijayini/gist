/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch, Router } from 'react-router-dom';

import routePaths from './lib/routePaths';
import LoaderContextProvider from './lib/loader';
import history from './lib/history';
import Layout from './shared-components/Layout';

import Home from './components/Home';
import Gists from './components/Gists';
import Error from './components/Error';

ReactDOM.render(
  <Router history={history}>
    <Layout>
      <LoaderContextProvider>
        <Switch>
          <Route exact path={routePaths.HOME} component={Home} />
          <Route path={routePaths.GISTS} component={Gists} exact />
          <Route exact path={routePaths.ERROR} component={Error} />
        </Switch>
      </LoaderContextProvider>
    </Layout>
  </Router>,
  document.getElementById('root'),
);
