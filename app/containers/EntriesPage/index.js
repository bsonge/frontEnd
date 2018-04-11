/* eslint no-alert: "warn" */
/**
 *
 * EntriesPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { getActive } from 'themes';
import Form from 'components/Form/index';
import PageHeader from 'components/PageHeader/index';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectEntriesPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import { postEntry } from './actions';
import { SCHEMAS } from '../App/constants';
import messages from './messages';

export class EntriesPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor() {
    super();
    this.submit = this.submit.bind(this);
    this.state = { selection: 'blank' };
  }
  changeSelection = (e) => {
    this.setState({ selection: e.target.value });
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
      if (fields[i].value) {
        data[fields[i].name] = fields[i].value;
      }
    }
    this.props.dispatch(postEntry(entryType, data));
  }
  render() {
    const theme = getActive();
    const Select = styled.select`
      border: 1px solid black;
      margin-left: 5px;
      background-color: ${theme.get('primary')};
      margin-bottom: 5px;
    `;
    return (
      <div>
        <Helmet>
          <title>Entries</title>
          <meta name="description" content="Entries Page" />
        </Helmet>
        <PageHeader title={messages.header.defaultMessage} />
        <Select onChange={this.changeSelection}>
          <option value="blank" hidden>Select Form</option>
          <option value="target">Target</option>
          <option value="target_id">Target ID</option>
          <option value="experiment">Experiment</option>
          <option value="chemical">Chemical</option>
          <option value="toxicity">Toxicity</option>
          <option value="assay">Assay</option>
          <option value="citation">Citation</option>
          <option value="citation_id">Citation ID</option>
        </Select>
        <Form schema={SCHEMAS[this.state.selection]} schemaType={this.state.selection} handler={this.submit} />
      </div>
    );
  }
}

EntriesPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  entriespage: makeSelectEntriesPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'entriesPage', reducer });
const withSaga = injectSaga({ key: 'entriesPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(EntriesPage);
