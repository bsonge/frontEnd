/**
*
* ListView
*
*/

import React from 'react';
import styled from 'styled-components';
import { getActive } from 'themes';
import PropTypes from 'prop-types';

// import { FormattedMessage } from 'react-intl';
// import messages from './messages';

// import SelectDatabase from '../SelectDatabase';
import ListItem from '../ListItem';
// import SelectDatabase from '../SelectDatabase';
// import Filter from '../DB_Helper_Components/Filter';
import PageTurn from '../PageTurn';

class ListView extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      cursor: 1,
      chunk: 12,
    };
  }
  // recieve array from props
  // pass down elements to list item
  render() {
    const theme = getActive();
    const ViewPort = styled.div`
      border: 1px solid black;
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
    const mochComponents = this.props.entries.map((entry) => <ListItem entry={entry} />);
    return (
      <Wrapper>
        <PageTurn />
        <ViewPort>{mochComponents}</ViewPort>
      </Wrapper>
    );
  }
}

ListView.propTypes = {
  entries: PropTypes.array.isRequired,
};

export default ListView;

//  //the following code is for splitting a moch array in constructor. keeping it becuase I think it might be useful later
// this.moch = Object.assign(Assay, Citation, CitationID, Target, TargetID, Tox);
// //split array into chunks
//
// let temparray;
// const chunk = 12;
// for (let i = 0, j = Assay.length; i < j; i += chunk) {
//   temparray = Assay.slice(i, i + chunk);
//   this.moch = temparray;
// }
