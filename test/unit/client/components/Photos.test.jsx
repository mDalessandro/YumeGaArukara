import { expect } from 'chai';
import React from 'react';
import { shallow } from 'enzyme';
import Photos from '../../../../src/components/Photos';
import { setupChai, enzymeSetup } from '../../unitTestUtils';

setupChai();
enzymeSetup();

describe('Photos:', () => {
  let props;

  beforeEach(() => {
    props = {
      options: [<img src="fakeImage1" alt="fakeImage1" />, <img src="fakeImage2" alt="fakeImage2" />],
    };
  });

  it('renders a single photo', () => {
    const wrapper = shallow(<Photos {...props} />);

    expect(wrapper.children()).to.have.length(1);
  });
});
