import React, { Fragment, Component } from 'react';

import { withLoader, loaderPropTypes } from '../lib/loader';
import Heading from '../ui-components/Heading';

import labels from './labels/Error.labels';

class Error extends Component {
  componentDidMount() {
    const {
      loader: { showLoader, updateShowLoader },
    } = this.props;
    if (showLoader) {
      updateShowLoader(false);
    }
  }

  render() {
    return (
      <Fragment>
        <div className="error">
          <Heading
            text={labels.error_message}
            color="warningMessageColor"
            variant="extra-bold"
            level="1"
          />
        </div>
        <style jsx="true">
          {`
            .error {
              text-align: center;
              margin-top: 20px;
            }
          `}
        </style>
      </Fragment>
    );
  }
}

Error.propTypes = {
  loader: loaderPropTypes.isRequired,
};

export default withLoader(Error);

export { Error };
