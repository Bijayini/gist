import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import theme from '../lib/theme';
import BodyCopy from '../ui-components/BodyCopy';

const UserInfo = ({ userDetails }) => {
  return (
    <Fragment>
      <div className="gist-details">
        <div className="bio">
          <img src={userDetails.image} alt={userDetails.owner} />
        </div>
        <div className="details">
          <BodyCopy
            variant="extra-bold"
            xs="x-large"
            xm="x-large"
            xl="x-large"
            color="textColor"
          >
            {userDetails.owner}
          </BodyCopy>
          <br />
          <BodyCopy variant="regular" xs="1" xm="1" xl="1" color="textColor">
            {userDetails.gitHubUrl}
          </BodyCopy>
        </div>
      </div>
      <style jsx="true">
        {`
          .gist-details {
            margin-top: 20px;
            border: 1px solid ${theme.border};
            display: flex;
            padding: 10px;
            border-radius: 3px;
          }
          .bio {
            width: 100px;
            height: 100px;
            margin-right: 20px;
          }
          .bio > img {
            max-width: 100%;
            border-radius: 5px;
          }
        `}
      </style>
    </Fragment>
  );
};

UserInfo.propTypes = {
  userDetails: PropTypes.shape({
    owner: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    gitHubUrl: PropTypes.string.isRequired,
  }).isRequired,
};

export default UserInfo;
