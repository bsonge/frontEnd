import React from 'react';
import { shallow } from 'enzyme';

import PageHeader from 'components/PageHeader/index';
import SearchBar from 'components/SearchBar/index';
import { HomePage } from '../index';

describe('<HomePage />', () => {
  it('Expect to have a <PageHeader /> component', () => {
    const wrapper = shallow(<HomePage />);
    expect(wrapper.find(PageHeader).length).toEqual(1);
  });

  it('Expect to have a <SearchBar /> component', () => {
    const wrapper = shallow(<HomePage />);
    expect(wrapper.find(SearchBar).length).toEqual(1);
  });
});
