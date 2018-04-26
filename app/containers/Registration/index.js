/**
 *
 * Registration
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import PageHeader from 'components/PageHeader/index';
import Form from 'components/Form/index';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectRegistration from './selectors';
import reducer from './reducer';
import saga from './saga';
import postRegistration from './actions';
import { SCHEMAS } from '../App/constants';
import messages from './messages';

export class Registration extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor() {
    super();
    this.submit = this.submit.bind(this);
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
    if (data.password !== data.passwordConfirm) {
      window.alert('Your passwords do not match!');
    } else {
      this.props.dispatch(postRegistration(entryType, data));
    }
  }
  render() {
    return (
      <div>
        <Helmet>
          <title>Registration</title>
          <meta name="description" content="Registration Page" />
        </Helmet>
        <PageHeader title={messages.header.defaultMessage} />
        <Form schema={SCHEMAS.registration} handler={this.submit()} />
      </div>
    );
  }
}

Registration.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  registration: makeSelectRegistration(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'registration', reducer });
const withSaga = injectSaga({ key: 'registration', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Registration);
