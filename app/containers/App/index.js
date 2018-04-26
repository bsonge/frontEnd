/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import HomePage from 'containers/HomePage/Loadable';
import EntriesPage from 'containers/EntriesPage/Loadable';
import ViewDBPage from 'containers/ViewDBPage/Loadable';
import ManageAccounts from 'containers/ManageAccounts/Loadable';
import Profile from 'containers/Profile/Loadable';
import Login from 'containers/Login/Loadable';
import Registration from 'containers/Registration/Loadable';
import BadPermissions from 'containers/BadPermissions/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import NavBar from 'containers/NavBar/Loadable';
import Footer from 'containers/Footer/Loadable';


import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectApp from './selectors';
import reducer from './reducer';
import saga from './saga';

// import PropTypes from 'prop-types';

export class App extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="app_container container-fluid">
        {/* reg={this.reg} */}
        {/* <NavBar location={this.props.location} /> */}
        <NavBar />
        <div className="body_wrap">
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/entries" component={EntriesPage} />
            <Route path="/database" component={ViewDBPage} />
            <Route path="/profile" component={Profile} />
            <Route path="/login" component={Login} />
            <Route path="/accounts" component={ManageAccounts} />
            <Route path="/denied" component={BadPermissions} />
            <Route path="/registration" component={Registration} />
            <Route component={NotFoundPage} />
          </Switch>
        </div>
        <Footer />
      </div>
    );
  }
}

App.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  app: makeSelectApp(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'app', reducer });
const withSaga = injectSaga({ key: 'app', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(App);
