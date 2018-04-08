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
// import BigBtn1 from 'components/BTNS/BigBtn1';
import { getActive } from 'themes';
import Form from 'components/Form/index';
import PageHeader from 'components/PageHeader/index';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectHomePage from './selectors';
import reducer from './reducer';
import saga from './saga';
import { getEntry } from './actions';
import { SCHEMAS } from '../App/constants';
import messages from './messages';

export class HomePage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.navigate = this.navigate.bind(this);
    this.state = { selection: 'blank' };
  }
  changeSelection = (e) => {
    this.setState({ selection: e.target.value });
  }
  navigate(path) {
    this.props.dispatch(push(path));
  }
  submit(entryType) {
    // NOTE: There is a conditional in the loop to check if name is defined
    //       this can be removed once the definitions of the models are transfered
    //       it is only there to prevent the models that are not connected from
    //       throwing errors

    const fields = document.getElementById('entryData').children;
    const data = {};
    for (let i = 0; i < fields.length; i += 1) {
      if (fields[i].name === undefined || fields[i].name === '') {
        window.alert('This entry has not defined connection to database');
        return;
      }
      data[fields[i].name] = fields[i].value;
    }
    this.props.dispatch(getEntry(entryType, data));
  }
  render() {
    const theme = getActive();
    const Select = styled.select`
      border: 1px solid black;
      margin-left: 5px;
      background-color: ${theme.get('primary')};
      margin-bottom: 5px;
    `;
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
          <Select onChange={this.changeSelection}>
            <option value="all">All</option>
            <option value="target">Target</option>
            <option value="experiment">Experiment</option>
            <option value="chemical">Chemical</option>
            <option value="toxicity">Toxicity</option>
          </Select>
          <Form schema={SCHEMAS[this.state.selection]} schemeType={this.state.selection} handler={this.submit} />
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
