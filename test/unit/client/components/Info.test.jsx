import { expect } from 'chai';
import React from 'react';
import { shallow } from 'enzyme';
import Info from '../../../../src/components/Info';
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
    const wrapper = shallow(<Info {...props}>props.children</Info>);

    expect(wrapper.children()).to.have.length(1);
  });
});
