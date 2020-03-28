import React from 'react';

const Hours = () => {
  const takeOutHours = '4pm - 8pm';

  return (
    <div className="hours-wrapper">
      <h2>Hours (Take-out only*)</h2>
      <div className="hours-subtitle">
        * Udon Pre-order: Begins daily at 9am at&nbsp;
        <a href="https://tinyurl.com/YumeOrder" target="_blank" rel="noreferrer noopener">
          tinyurl.com/YumeOrder
        </a>
        . Closes when we sell out. Last order at 7:50pm.
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
