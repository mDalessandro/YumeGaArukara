import React from 'react';

const aurukaraEmailAddress = 'yumegaarukara@gmail.com';

const ContactUs = () => (
  <div className="contactUs">
    <h2 className="contactUsHeading">Contact us</h2>
    <div className="location">
      <div>1815 Massachusetts Avenue</div>
      <div>Cambridge, MA 02140</div>
    </div>
    <div className="socialMedia">
      <a className="socialMediaLink" href="https://www.facebook.com/yumegaarukara/">
        <img src="../../facebook.png" alt="Facebook Link" />
      </a>
      <a className="socialMediaLink" href="https://www.instagram.com/yumegaarukara/?hl=en">
        <img src="../../instagram.png" alt="Instagram Link" />
      </a>
      <a className="socialMediaLink" href="https://www.yelp.com/biz/yume-ga-arukara-cambridge-2">
        <img src="../../yelp.png" alt="Yelp Link" />
      </a>
    </div>
    <a className="email" href={`mailto:${aurukaraEmailAddress}`}>
      {aurukaraEmailAddress}
    </a>
  </div>
);

export default ContactUs;
