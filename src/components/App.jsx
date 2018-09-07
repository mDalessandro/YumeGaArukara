import React from 'react';
import Content from './Content';
import Info from './Info';
import Location from './Location';
import Hours from './Hours';
import Photos from './Photos';
import photoList from '../constants/photoList';

import './App.scss';

const App = () => (
  <Content>
    <Photos options={photoList} />
    <Info>
      <Hours />
      <Location />
    </Info>
  </Content>
);

export default App;
