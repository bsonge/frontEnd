/**
*
* ListItem
* takes an array of items, then displays them
*/

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ListGroupItem, ListGroup } from 'react-bootstrap';

class ListItem extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.Item = styled.ul`
      list-style: none;
    `;
    if (typeof (this.props.entry) === 'object') {
      // data.push(Object.keys(this.props.entry));
      // data.push(Object.values(this.props.entry));
      this.data = Object.keys(this.props.entry).map((key, idx) => {
        if (key !== this.props.titleField && key !== this.props.descriptionField && this.props.entry[key]) {
          return (<ListGroupItem key={idx.toString()}><u>{key.split('_').join(' ').toUpperCase()}</u>: {this.props.entry[key]}</ListGroupItem>);
        }
        return null;
      });
    }
  }
  render() {
    // const ItemList = styled.ul`
    //   border-radius: 5px;
    //   border: 1px solid #222222;
    // `;
    const { titleField, descriptionField } = this.props;
    const title = titleField && this.props.entry[titleField];
    const desc = descriptionField && this.props.entry[descriptionField];
    return (
      <ListGroup>
        {title ? <this.Item><h4>{title}</h4></this.Item> : ''}
        {desc ? <this.Item><p>{desc}</p></this.Item> : ''}
        {this.data}
      </ListGroup>
    );
  }
}

ListItem.propTypes = { // note: It would be neat to pass in an object of keys in order of desired display then display them in order using loops
  entry: PropTypes.any,
  titleField: PropTypes.string,
  descriptionField: PropTypes.string,
};

export default ListItem;
