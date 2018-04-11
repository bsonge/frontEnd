/**
 *
 * HomePage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { push } from 'react-router-redux';

import styled from 'styled-components';
import SearchBar from 'components/SearchBar/index';
import PageHeader from 'components/PageHeader/index';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectHomePage from './selectors';
import reducer from './reducer';
import saga from './saga';
import { getEntry } from './actions';
import messages from './messages';

export class HomePage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.navigate = this.navigate.bind(this);
    this.submit = this.submit.bind(this);
  }
  navigate(path) {
    this.props.dispatch(push(path));
  }
  submit(destination, text) {
    console.log(text);
    this.props.dispatch(getEntry(null, { q: text }));
    console.log('We made it boys');
  }
  render() {
    const FlexBox = styled.div`
      display: -webkit-flex;
      display: flex;
      -webkit-flex-direction: column;
      flex-direction: column;
    `;
    return (
      <div>
        <Helmet>
          <title>Home</title>
          <meta name="description" content="Home Page" />
        </Helmet>
        <PageHeader title={messages.header.defaultMessage} />
        <br />
        <FlexBox >
          <SearchBar handler={this.submit} />
        </FlexBox>
      </div>
    );
  }
}

HomePage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  homepage: makeSelectHomePage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'homePage', reducer });
const withSaga = injectSaga({ key: 'homePage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(HomePage);
