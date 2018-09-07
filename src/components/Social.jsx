import React from 'react';
import Photo from './Photo';

const Social = () => (
  <div className="social">
    <a className="social-link" href="https://www.facebook.com/yumegaarukara/">
      <Photo source="../../facebook.png" alt="Facebook Link" />
    </a>
    <a className="social-link" href="https://www.instagram.com/yumegaarukara/?hl=en">
      <Photo source="../../instagram.png" alt="Instagram Link" />
    </a>
    <a className="social-link" href="https://www.yelp.com/biz/yume-ga-arukara-cambridge-2">
      <Photo source="../../yelp.png" alt="Yelp Link" />
    </a>
  </div>
);

export default Social;
