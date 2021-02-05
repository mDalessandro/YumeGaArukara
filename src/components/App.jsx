import React from 'react';
import Content from './Content';
import Photos from './Photos';
import Info from './Info';
import Hours from './Hours';
import ContactUs from './ContactUs';
import photoList from '../constants/photoList';

import './App.scss';

const App = () => (
  <Content>
    <Info>
      <div className="logo">
        <img src="../../yumeJapaneseBlueLogo.png" alt="Yume Ga Arukara Japanese Logo" />
      </div>
      <Hours />
      <ContactUs />
    </Info>
    <Photos options={photoList} />
  </Content>
);

export default App;
