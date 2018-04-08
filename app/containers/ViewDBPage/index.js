/**
 *
 * ViewDbpage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';

import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import PageHeader from 'components/PageHeader/index';
// import DbSideSearch from 'components/DbSideSearch';
// import DbViewPort from 'components/DbViewPort';
import DataView from 'components/DataView';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectViewDbpage from './selectors';
import reducer from './reducer';
import saga from './saga';
// import messages from './messages';

export class ViewDbpage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = { selection: 'blank' };
  }
  changeSelection = (e) => {
    this.setState({ selection: e.target.value });
  }
  render() {
    const ViewportWrap = styled.div`
      ${''/* Since the subcontainer is a flex container, I dont know if we should make this flex unless we need to.  Things can sometimes get wonky when you flex a flex container */}
      ${''/* display: flex; */}
      ${''/* align-items:center; */}
      justify-content:center;
      height:80vh;
    `;
    return (
      <div>
        <Helmet>
          <title>Database</title>
          <meta name="description" content="Database Page" />
        </Helmet>
        <PageHeader title="Database" />
        <ViewportWrap>
          {/* <DbViewPort />
          <DbSideSearch /> */}
          <DataView data={{ test: 'data', other: 'thing', qdon: 'jdubs' }} />
        </ViewportWrap>
      </div>
    );
  }
}

ViewDbpage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  viewdbpage: makeSelectViewDbpage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'viewDbpage', reducer });
const withSaga = injectSaga({ key: 'viewDbpage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(ViewDbpage);
