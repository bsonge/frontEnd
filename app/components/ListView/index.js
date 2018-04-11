/**
*
* ListView
*
*/

import React from 'react';
import styled from 'styled-components';
import { getActive } from 'themes';
import PropTypes from 'prop-types';

import ListItem from '../ListItem';

class ListView extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const theme = getActive();
    const ViewPort = styled.div`
      ${''/* border: 1px solid black; */}
      border-radius: 5px;
      margin:auto;
      width:100%;
      margin-top: 20px;
      background-color: ${theme.get('primary')};
      overflow-y: scroll;
    `;
    const Wrapper = styled.div`
      width: 800px;
      height:100%;
      border-radius: 5px;
      border: 1px solid black;
    `;
    const mochComponents = this.props.entries.map((entry) => <ListItem entry={entry} titleField={this.props.titleField} descriptionField={this.props.descriptionField} />);
    return (
      <Wrapper>
        <ViewPort>{mochComponents}</ViewPort>
      </Wrapper>
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