import React from 'react';
import Content from './Content';
import Photos from './Photos';
import Info from './Info';
import Logo from './Logo';
import Hours from './Hours';
import Location from './Location';
import Social from './Social';
import photoList from '../constants/photoList';

import './App.scss';

const App = () => (
  <Content>
    <Photos options={photoList} />
    <Info>
      <Logo />
      <Hours />
      <Location />
      <Social />
    </Info>
  </Content>
);

export default App;
