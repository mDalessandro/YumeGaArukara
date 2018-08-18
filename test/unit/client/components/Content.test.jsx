import { expect } from 'chai';
import React from 'react';
import { shallow } from 'enzyme';
import Content from '../../../../src/components/Content';
import { setupChai, enzymeSetup } from '../../unitTestUtils';

setupChai();
enzymeSetup();

describe('Content:', () => {
  let props;

  beforeEach(() => {
    props = {
      children: <div />,
    };
  });

  it('renders children', () => {
    const wrapper = shallow(<Content>props.children</Content>);

    expect(wrapper.children()).to.have.length(1);
  });
});
