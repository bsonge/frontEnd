/**
*
* SearchBar
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import { styledElements, getActive } from 'themes';
import styled from 'styled-components';
import messages from './messages';

class SearchBar extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor() {
    super();
    this.state = {
      selection: 'Search the Database',
      destination: null,
      query: ' ',
    };

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    const text = document.getElementById('search').value;
    this.props.handler(this.destination, text);
  }

  changeSelection = (e) => {
    this.setState({
      selection: e.target.value,
      destination: e.target.dest,
    });
  }

  render() {
    const Search = styledElements.SearchBar;
    const Submit = styledElements.Submit;
    const theme = getActive();
    const Select = styled.select`
      border: 1px solid black;
      margin-left: 5px;
      border-radius: 2px;
      background-color: ${theme.get('primary')};
      margin-bottom: 10px;
      height: 25px;
    `;
    return (
      <div>
        <Select onChange={this.changeSelection}>
          <option value={messages.DefaultPlaceHolder.defaultMessage} dest={null} hidden>Select Form</option>
          <option value={messages.DefaultPlaceHolder.defaultMessage} dest="All">All</option>
          <option value={messages.TargetPlaceHolder.defaultMessage} dest="Target">Target</option>
          <option value={messages.ExperimentPlaceHolder.defaultMessage} dest="Experiment">Experiment</option>
          <option value={messages.CitationPlaceHolder.defaultMessage} dest="Citation">Citation</option>
        </Select>
        <br />
        <form onSubmit={(e) => this.onSubmit(e)}>
          <Search id="search" type="text" placeholder={this.state.selection} /> <Submit type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

SearchBar.propTypes = {
  handler: PropTypes.func.isRequired,
};

export default SearchBar;
