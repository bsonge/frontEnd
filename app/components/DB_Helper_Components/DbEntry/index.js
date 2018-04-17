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
  constructor(props) {
    super(props);
    this.minmax = this.minmax.bind(this);
    this.state = { toggle: false };
  }
  minmax(evt) {
    evt.preventDefault();
    // this.setState({ toggle: !this.state.toggle });
  }
  fill() {

  }
  mochEntries = Object.entries(this.props.moch);
  mochComponents = this.mochEntries.map((mochEntry) => <p style={{ display: 'inline-block', padding: '10px' }} > {mochEntry[0]}: {mochEntry[1]}</p>);
  render() {
    const theme = getActive();
    const Entry = styled.div`
      border: 1px solid black;
      margin:auto;
      width:100%;
      height:auto;
      background-color: ${theme.get('primary')};
      color: $(theme.get('secondary_text'));
      position:relative;
      display: flex;
      > h3 {
        display:inline-block;
        ${'' /* position: absolute;
        top: 0px;
        margin: 0px; */}
      }
      &:hover{
        background-color: #b2c3e4;
      }
      &.isActive {
        background-color: lightgreen;
      }
    `;
    // const open = {
    //   height: '100%',
    //   display: 'block',
    // };
    // className="isActive"
    return (
      <Entry onClick={(evt) => this.minmax(evt)} >
        <h3> {this.props.moch.assay_name} :
          <span style={{ fontSize: '.9em' }}> ID: {this.props.moch.aeid} </span>
        </h3>
        {/* <p style={{ paddingTop: '.5em' }}> Description: {this.props.moch.assay_component_endpoint_desc}</p> */}
      </Entry>
    );
  }
}

DbEntry.propTypes = {
  moch: PropTypes.obj,
};

export default DbEntry;
