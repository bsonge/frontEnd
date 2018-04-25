/**
*
* ListView
*
*/

import React from 'react';
// import styled from 'styled-components';
// import { getActive } from 'themes';
import PropTypes from 'prop-types';
import { Well, Col, Row, Button, ButtonToolbar } from 'react-bootstrap';
import pencil from '../../images/pencil.png';
import dnld from '../../images/dnld.png';

import ListItem from '../ListItem';

class ListView extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    this.loggedIn = true;
    this.isAdmin = true;
    const mochComponents = this.props.entries.map((entry, idx) => (<span style={{ position: 'relative' }}>
      {
        // () => (this.isAdmin && this.loggedIn) ? (
        //   <ButtonToolbar style={{ width: '99%', margin: 'auto' }}>
        //     <Button bsStyle="danger" bsSize="xsmall" style={{ float: 'right', color: 'black' }}>X</Button>
        //     <Button bsStyle="success" bsSize="xsmall" style={{ float: 'right' }}><img alt="edit" src={pencil} style={{ width: '15px', height: 'auto' }} /></Button>
        //     <Button bsStyle="warning" bsSize="xsmall" style={{ float: 'right' }}><img alt="edit" src={dnld} style={{ width: '15px', height: 'auto' }} /></Button>
        //   </ButtonToolbar>
        // ) : ''
      }
      <ButtonToolbar style={{ width: '99%', margin: 'auto' }}>
        <Button bsStyle="danger" bsSize="xsmall" style={{ float: 'right', color: 'black' }}>X</Button>
        <Button bsStyle="success" bsSize="xsmall" style={{ float: 'right' }}><img alt="edit" src={pencil} style={{ width: '15px', height: 'auto' }} /></Button>
        <Button bsStyle="warning" bsSize="xsmall" style={{ float: 'right' }}><img alt="edit" src={dnld} style={{ width: '15px', height: 'auto' }} /></Button>
      </ButtonToolbar>

      <ListItem entry={entry} titleField={this.props.titleField} descriptionField={this.props.descriptionField} key={idx.toString()} />
    </span>));
    return (
      <Row>
        <Col md={6} mdOffset={1} >
          <Well >{mochComponents}</Well>
        </Col>
      </Row>
    );
  }
}

ListView.propTypes = {
  entries: PropTypes.array.isRequired,
  titleField: PropTypes.string,
  descriptionField: PropTypes.string,
};

export default ListView;

// // this code is for whatever container holds this
// turnPage(direction) {
//   const newPage = this.page + direction; // idealy this is -1 for left and 1 for right, but multiple page turn support ain't bad
//   if (newPage >= 1 && newPage <= this.lastPg) {
//     this.page = newPage;
//   }
//   // when pageis turned, ask for next dataset, set cursor to 0 of new data,
// }
// recieve array from props
// pass down elements to list item
