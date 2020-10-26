import React from 'react';

const Hours = () => {
  const takeOutHours = '3pm - 7:45pm';

  return (
    <div className="hours-wrapper">
      <h2>Hours (Take-out only*)</h2>
      <div className="hours-subtitle">
        * Udon Pre-order: Begins daily at 9am on&nbsp;
        <a
          className="order-online"
          href="https://www.toasttab.com/yumegaarukara"
          target="_blank"
          rel="noreferrer noopener"
        >
          Toast
        </a>
        . Last order 30 minutes before close.
      </div>
      <div className="hours">
        <div id="Sunday" className="dateTime">
          <div className="day">Sunday</div>
          <div className="time">11am - 2:45pm</div>
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
