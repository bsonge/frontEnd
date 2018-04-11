 /**
 *
 * NavBar
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { push } from 'react-router-redux';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';

import NavBtn from 'components/BTNS/NavBtn/Loadable';
import { getActive } from '../../themes';
import makeSelectNavBar from './selectors';
import reducer from './reducer';
import saga from './saga';

export class NavBar extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.navigate = this.navigate.bind(this);
  }

  navigate(path) {
    this.props.dispatch(push(path));
  }

  render() {
    const theme = getActive();
    // const ProfileBtn = styledElements.ProfileBtn;
    return (
      <Navbar inverse collapseOnSelect fluid>
        <Navbar.Header>
          <Navbar.Brand>
            <Nav>
              <NavBtn theme={theme} text="ChemMoA" link="/" handler={(link) => this.navigate(link)} />
            </Nav>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse >
          <Nav>
            <NavItem>
              <NavBtn theme={theme} text="HOME" link="/" handler={(link) => this.navigate(link)} />
            </NavItem>
            <NavItem>
              <NavBtn theme={theme} text="ENTRIES" link="/entries" handler={(link) => this.navigate(link)} />
            </NavItem>
            <NavItem>
              <NavBtn theme={theme} text="DATABASE" link="/database" handler={(link) => this.navigate(link)} />
            </NavItem>
            <NavItem>
              <NavBtn theme={theme} text="LOGIN" link="/login" handler={(link) => this.navigate(link)} />
            </NavItem>
            <NavItem>
              <NavBtn theme={theme} text="REGISTRATION" link="/registration" handler={(link) => this.navigate(link)} />
            </NavItem>
            <NavItem>
              <NavBtn theme={theme} text="PROFILE" link="/profile" handler={(link) => this.navigate(link)} />
            </NavItem>
            <NavItem>
              <NavBtn theme={theme} text="ACCOUNTS" link="/accounts" handler={(link) => this.navigate(link)} />
            </NavItem>
            {/* <NavBtn theme={theme} text="DENIED" link="/denied" handler={(link) => this.navigate(link)} /> */}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

NavBar.propTypes = {
  // location: PropTypes.object,
  dispatch: PropTypes.func.isRequired,
  // active: PropTypes.obj,
};

const mapStateToProps = createStructuredSelector({
  navbar: makeSelectNavBar(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

// const routherthing = withRouther(NavBar);
const withReducer = injectReducer({ key: 'navBar', reducer });
const withSaga = injectSaga({ key: 'navBar', saga });

export default compose(
  // routherthing,
  withReducer,
  withSaga,
  withConnect,
)(NavBar);
