/* eslint-disable react/no-multi-comp */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import LoaderSpinner from '../ui-components/Loader';

const LoaderContext = React.createContext();

class Loader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showLoader: false,
      updateShowLoader: this.updateShowLoader,
    };
  }

  updateShowLoader = value => {
    this.setState({
      showLoader: value,
    });
  };

  render() {
    const { children } = this.props;
    const { showLoader } = this.state;
    return (
      <LoaderContext.Provider value={this.state}>
        {children}
        {showLoader && <LoaderSpinner />}
      </LoaderContext.Provider>
    );
  }
}

Loader.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Loader;

const withLoader = InnerComponent => {
  class ComponentGeneratorClass extends React.Component {
    render() {
      return (
        <LoaderContext.Consumer>
          {value => <InnerComponent {...this.props} loader={value} />}
        </LoaderContext.Consumer>
      );
    }
  }

  ComponentGeneratorClass.displayName = `${InnerComponent.displayName ||
    InnerComponent.name ||
    'Component'}WithLoader`;

  return ComponentGeneratorClass;
};

const loaderPropTypes = PropTypes.shape({
  updateShowLoader: PropTypes.func.isRequired,
  showLoader: PropTypes.bool.isRequired,
});

export { LoaderContext, withLoader, loaderPropTypes };
