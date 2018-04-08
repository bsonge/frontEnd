import React from 'react';
import { shallow } from 'enzyme';
import styledComponent from 'styled-components';

import ListView from '../index';

const thing = [{ test: 'thing' }, { other: '1' }];

describe('<ListView />', () => {
  it('Renders something', () => {
    const div = styledComponent.div;
    const test = shallow(<ListView entries={thing} entry={thing} lastPg={3} page={2} />);
    expect(
      test.find(div).node
    ).toBeDefined();
  });
});
