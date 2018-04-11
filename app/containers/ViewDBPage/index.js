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
// import ListView from 'components/ListView';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectViewDbpage from './selectors';
import reducer from './reducer';
import saga from './saga';

// import moch data
// import mochData from '../../../moch_data/json/test_data.json';

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
      display: flex;
      align-items:center;
      justify-content:center;
      ${''/* height:80vh; */}
    `;
    // console.log()
    return (
      <div>
        <Helmet>
          <title>Database</title>
          <meta name="description" content="Database Page" />
        </Helmet>
        <PageHeader title="Database" />
        <ViewportWrap>
          {/* <ListView entries={} titleField={'title'} /> */}
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
