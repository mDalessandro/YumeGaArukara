import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
import sinonChai from 'sinon-chai';

export const setupChai = () => {
  chai.use(chaiAsPromised);
  chai.use(sinonChai);
};

export const asyncExpectationHelper = expectation => {
  // check out defer as an alternative
  setTimeout(() => {
    expectation();
  }, 0);
};

export const enzymeSetup = () => {
  /* eslint-disable global-require */
  const enzyme = require('enzyme');
  const Adapter = require('enzyme-adapter-react-16');

  enzyme.configure({ adapter: new Adapter() });
};
