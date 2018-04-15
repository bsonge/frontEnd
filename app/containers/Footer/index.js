/**
 *
 * Footer
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectFooter from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

export class Footer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="footer fixed-bottom">
        <Helmet>
          <title>Footer</title>
          <meta name="description" content="Description of Footer" />
        </Helmet>
        <p className="text-center"><FormattedMessage {...messages.header} /></p>
      </div>
    );
  }
}

Footer.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  footer: makeSelectFooter(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'footer', reducer });
const withSaga = injectSaga({ key: 'footer', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Footer);
