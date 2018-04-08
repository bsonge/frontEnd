/**
*
* ListItem
* takes an array of items, then displays them
*/

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

class ListItem extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    if (typeof (this.props.entry) === 'object') {
      const data = [];
      data.push(Object.keys(this.props.entry));
      data.push(Object.values(this.props.entry));
    }
  }
  render() {
    return (
      <ul>
        <li>key:value</li>
      </ul>
    );
  }
}

ListItem.propTypes = {
  entry: PropTypes.Any,
};

export default ListItem;
