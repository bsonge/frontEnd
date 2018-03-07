/**
*
* DbEntry
*
*/

import React from 'react';
import styled from 'styled-components';
import { getActive } from 'themes';
import PropTypes from 'prop-types';

class DbEntry extends React.Component { // eslint-disable-line react/prefer-stateless-function
  // constructor(props){
  //   super(props);
  //   this.setState();
  // }
  render() {
    const theme = getActive();
    const Entry = styled.div`
      border: 1px solid black;
      margin:auto;
      width:100%;
      height:12.4%;
      background-color: ${theme.get('tertiary')};
      color: $(theme.get('secondary_text'));
      position:relative;
      > h3 {
        position: absolute;
        top: 0px;
        margin: 0px;
      }
    `;
    return (
      <Entry>
        <h3> {this.props.moch.assay_name} :
          <span style={{ fontSize: '.9em' }}> ID: {this.props.moch.aid} </span></h3>
        <p> Description: {this.props.moch.assay_desc}</p>
      </Entry>
    );
  }
}

DbEntry.propTypes = {
  moch: PropTypes.obj,
};

export default DbEntry;