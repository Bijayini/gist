import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import theme from '../lib/theme';
import BodyCopy from '../ui-components/BodyCopy';

const TagList = ({ tags }) => {
  return (
    <Fragment>
      <div className="tag-container">
        {tags.map(tag => (
          <div className="tag" key={tag}>
            <BodyCopy variant="regular" xs="4" xm="4" xl="4" color="white">
              {tag}
            </BodyCopy>
          </div>
        ))}
      </div>
      <style jsx="true">
        {`
          .tag-container {
            display: flex;
          }
          .tag {
            background: ${theme.primaryColor};
            border-radius: 5px;
            margin-right: 5px;
            padding: 1px 5px;
          }
        `}
      </style>
    </Fragment>
  );
};

TagList.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default TagList;
