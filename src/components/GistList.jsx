import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import theme from '../lib/theme';
import BodyCopy from '../ui-components/BodyCopy';

import TagList from './TagList';
import ForkList from './ForkList';

const GistList = ({ gistDetails }) => {
  return (
    <Fragment>
      <div className="gist-list-container">
        {gistDetails.map(gist => (
          <div className="gist-list" key={gist.id}>
            <div className="id">
              <BodyCopy variant="bold" xs="2" xm="2" xl="2" color="textColor">
                {gist.id}
              </BodyCopy>
            </div>
            {!!(gist.tags && gist.tags.length) && (
              <div className="tags">
                <TagList tags={gist.tags} />
              </div>
            )}
            {!!(gist.forks && gist.forks.length) && (
              <div className="forks">
                <ForkList forks={gist.forks} />
              </div>
            )}
          </div>
        ))}
      </div>
      <style jsx="true">
        {`
          .gist-list-container {
            margin-top: 20px;
            border: 1px solid ${theme.border};
            border-radius: 3px;
            border-bottom: none;
          }
          .gist-list {
            border-bottom: 1px solid ${theme.border};
            display: flex;
            padding: 10px;
          }
          .id {
            width: 40%;
          }
          .tags {
            width: 30%;
          }
          .forks {
            width: 30%;
          }
        `}
      </style>
    </Fragment>
  );
};

GistList.propTypes = {
  gistDetails: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      tags: PropTypes.arrayOf(PropTypes.string).isRequired,
      forks: PropTypes.arrayOf(PropTypes.string).isRequired,
    }),
  ).isRequired,
};
export default GistList;
