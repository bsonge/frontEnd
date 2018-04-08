/**
*
* PageTurn
*
*/

import React from 'react';
import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

class PageTurn extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const Wrapper = styled.div`
      border-top:1px solid grey;
      position: relative;
      text-align:center;
      & > .pgturn_L, .pgturn_R{
        display: block;
        border: 1px solid black;
        background: black;
        color: white;
        position: absolute;
        bottom: 0;
      }
      & > .pgturn_L{
        left: 0;
      }
      & > .pgturn_R{
        right: 0;
      }
    `;
    return (
      <Wrapper>
        <input type="submit" className="pgturn_L" value="<" />
        <FormattedMessage {...messages.Page} />
        <input type="submit" className="pgturn_R" value=">" />
      </Wrapper>
    );
  }
}

PageTurn.propTypes = {

};

export default PageTurn;
