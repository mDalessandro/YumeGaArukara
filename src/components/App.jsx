import React from 'react';
import Content from './Content';
import Info from './Info';
import Location from './Location';
import Hours from './Hours';

const App = () => (
  <Content>
    Hello Yume
    <Info>
      <Location />
      <Hours />
    </Info>
  </Content>
);

export default App;
