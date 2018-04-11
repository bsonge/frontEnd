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
      // data.push(Object.keys(this.props.entry));
      // data.push(Object.values(this.props.entry));
      this.data = Object.keys(this.props.entry).map((key) => {
        if (key !== this.props.titleField && key !== this.props.descriptionField) {
          return (<li >{key}: {this.props.entry[key]}</li>);
        }
        return null;
      });
    }
  }
  render() {
    const { titleField, descriptionField } = this.props;
    const title = titleField && this.props.entry[titleField];
    const desc = descriptionField && this.props.entry[descriptionField];
    return (
      <ul style={{ border: '1px solid black' }}>
        {title ? <li style={{ listStyle: 'none' }}><h4>{title}</h4></li> : ''}
        {desc ? <li style={{ listStyle: 'none' }}><p>{desc}</p></li> : ''}
        {this.data}
      </ul>
    );
  }
}

ListItem.propTypes = {
  entry: PropTypes.Any,
  titleField: PropTypes.string,
  descriptionField: PropTypes.string,
};

export default ListItem;
