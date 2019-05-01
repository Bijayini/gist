import React, { Fragment, Component } from 'react';
import css from 'styled-jsx/css';

import { maxWidth } from '../lib/theme';
import api, { urls } from '../lib/api';
import { loaderPropTypes, withLoader } from '../lib/loader';
import isEmpty from '../lib/utils';

import Input from '../ui-components/Input';
import Button from '../ui-components/Button';
import WarningMessage from '../ui-components/WarningMessage';

import labels from './labels/GistList.labels';
import GistList from './GistList';
import UserInfo from './UserInfo';

const buttonStyles = css.resolve`
  {
    position: absolute;
    right:0;
    top:0;
  }
`;

class Gists extends Component {
  state = {
    userName: '',
    hasError: false,
    errorMessage: '',
    gistDetails: {},
  };

  updateError = value => {
    this.setState({
      hasError: value,
    });
  };

  handleChange = event => {
    const { hasError } = this.state;
    this.setState({
      userName: event.target.value,
      hasError: false,
    });
    if (hasError) {
      this.updateError(false);
    }
  };

  getListOfTags = files => {
    const tags = [];
    const keys = Object.keys(files);
    keys.forEach(key => {
      const tag = files[key].language;
      if (!tags.includes(tag)) {
        tags.push(tag);
      }
    });
    return tags;
  };

  getForkedPerson = forks => {
    return forks.map(fork => fork.owner.avatar_url);
  };

  getForkedData = data => {
    if (data.length >= 3) {
      return this.getForkedPerson(data.slice(2));
    }
    if (data.length) {
      return this.getForkedPerson(data);
    }
    return [];
  };

  gistsWithFilteredData = async gist => {
    const geForkedData = await api('get', urls.getGistDetails(gist.id));
    if (geForkedData) {
      return {
        id: gist.id,
        tags: this.getListOfTags(gist.files),
        forks: this.getForkedData(geForkedData),
      };
    }
  };

  onSubmit = async () => {
    const { userName } = this.state;
    const {
      loader: { updateShowLoader },
    } = this.props;
    if (userName.length) {
      updateShowLoader(true);
      const response = await api('get', urls.getGist(userName));

      if (response && (!isEmpty(response) || response.length)) {
        const gistWithDetails = await Promise.all(
          response.map(async gist => {
            const result = await this.gistsWithFilteredData(gist);
            return result;
          }),
        );

        const userDetails = {
          owner: response[0].owner.login,
          image: response[0].owner.avatar_url,
          gitHubUrl: response[0].owner.html_url,
        };

        this.setState({
          gistDetails: { ...userDetails, gistList: gistWithDetails },
        });
      } else {
        this.setState({ hasError: true, errorMessage: labels.user_not_valid });
      }

      updateShowLoader(false);
    } else {
      this.setState({ hasError: true, errorMessage: labels.empty_field_error });
    }
  };

  render() {
    const { userName, hasError, gistDetails, errorMessage } = this.state;
    return (
      <Fragment>
        <div className="gist-page">
          <div className="form-data">
            <Input
              placeholder={labels.enter_user_name}
              onInputChange={this.handleChange}
              value={userName}
              hasError={hasError}
            />
            <Button
              className={`submit-btn ${buttonStyles.className}`}
              type="submit"
              size="small"
              handleClick={this.onSubmit}
              styles={buttonStyles.styles}
            >
              {labels.search}
            </Button>
          </div>
          {hasError && <WarningMessage text={errorMessage} />}
          {!isEmpty(gistDetails) && <UserInfo userDetails={gistDetails} />}
          {gistDetails.gistList && gistDetails.gistList.length && (
            <GistList gistDetails={gistDetails.gistList} />
          )}
        </div>
        <style jsx="true">
          {`
            .gist-page {
              max-width: ${maxWidth};
              margin: 20px auto;
            }
            .form-data {
              position: relative;
              margin-bottom: 10px;
            }
          `}
        </style>
      </Fragment>
    );
  }
}

Gists.propTypes = {
  loader: loaderPropTypes.isRequired,
};

export default withLoader(Gists);
