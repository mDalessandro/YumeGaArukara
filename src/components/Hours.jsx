import React from 'react';

const Hours = () => {
  const takeOutHours = '3pm - 7pm';

  return (
    <div className="hours-wrapper">
      <h2>Hours (Take-out only*)</h2>
      <div className="hours-subtitle">
        * Udon Pre-order: Begins daily at 9am on&nbsp;
        <a
          className="order-online"
          href="https://souskasa.com/hosts/yume-ga-arukara"
          target="_blank"
          rel="noreferrer noopener"
        >
          Souskasa
        </a>
        . Closes when we sell out.
      </div>
      <div className="hours">
        <div id="Sunday" className="dateTime">
          <div className="day">Sunday</div>
          <div className="time">{takeOutHours}</div>
        </div>
        <br />
        <div id="Monday" className="dateTime">
          <div className="day">Monday</div>
          <div className="time">Closed</div>
        </div>
        <br />
        <div id="Tuesday" className="dateTime">
          <div className="day">Tuesday</div>
          <div className="time">Closed</div>
        </div>
        <br />
        <div id="Wednesday" className="dateTime">
          <div className="day">Wednesday</div>
          <div className="time">{takeOutHours}</div>
        </div>
        <br />
        <div id="Thursday" className="dateTime">
          <div className="day">Thursday</div>
          <div className="time">{takeOutHours}</div>
        </div>
        <br />
        <div id="Friday" className="dateTime">
          <div className="day">Friday</div>
          <div className="time">{takeOutHours}</div>
        </div>
        <br />
        <div id="Saturday" className="dateTime">
          <div className="day">Saturday</div>
          <div className="time">{takeOutHours}</div>
        </div>
      </div>
    </div>
  );
};

export default Hours;
