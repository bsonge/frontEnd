/**
*
* DataView
*
*/

// takes an object
// displays its values in a list

import React from 'react';
import styled from 'styled-components';

import PropTypes from 'prop-types';

// import { FormattedMessage } from 'react-intl';
// import messages from './messages';

class DataView extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.datalist = Object.keys(this.props.data).map((key) => (<li id={key}>{this.props.data[key]}</li>));
  }
  render() {
    const DviewWrap = styled.ul`
      width: 100%;
      height: auto;
      display: flex;
      border: 1px solid black;
      border-radius:5px;
      list-style: none;
      ${''/* flex-direction: column; */}
      & > li{
        margin-left: 10px;
        margin-right: 10px;
      }
    `;
    return (
      <DviewWrap>
        {this.datalist}
      </DviewWrap>
    );
  }
}

DataView.propTypes = {
  data: PropTypes.object,
};

export default DataView;
