import React from 'react';
import { mount } from 'enzyme';
import { styledElements } from 'themes';
import SearchBar from '../index';

describe('<SearchBar />', () => {
  beforeAll(() => {
    const div = document.createElement('div');
    window.domNode = div;
    document.body.appendChild(div);
  });

  it('Should respond to a changeSelection', () => {
    const spy = jest.fn();
    const wrap = mount(<SearchBar handler={spy} />);
    const select = wrap.find('select');
    expect(select.length).toBe(1);
    select.childAt(1).simulate('click');
    expect(spy.mock.calls.length).toBe(1);
  });

  it('Should respond to an onSubmit', () => {
    const Submit = styledElements.Submit;
    const spy = jest.fn();
    const wrap = mount(<SearchBar handler={spy} />, { attachTo: window.domNode });
    const submit = wrap.find(Submit);
    submit.simulate('submit');
    expect(spy.mock.calls.length).toBe(1);
  });

  it('Should render a form with an input', () => {
    const wrapper = mount(
      <SearchBar handler={() => {}} />
    );
    expect(wrapper.find('form').node).toBeDefined();
    expect(wrapper.find('input').node).toBeDefined();
  });
});
