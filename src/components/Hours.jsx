import React from 'react';

const Hours = () => {
  const dinnerTakeOutHours = '4pm - 8:30pm';

  return (
    <div className="hours-wrapper">
      <h2>Take-out Hours</h2>
      <a
        className="order-online"
        href="https://www.toasttab.com/yumegaarukara"
        target="_blank"
        rel="noreferrer noopener"
      >
        Order on Toast*
      </a>
      <div className="hours-subtitle">
        <div>* Order udon up to 24 hours in advance.</div>
        <div>Last order 15 minutes before close.</div>
      </div>
      <div className="hours">
        <div id="Sunday" className="dateTime">
          <div className="day">Sunday</div>
          <div className="time">11am - 2:30pm</div>
        </div>
        <div id="Monday" className="dateTime">
          <div className="day">Monday</div>
          <div className="time">Closed</div>
        </div>
        <div id="Tuesday" className="dateTime">
          <div className="day">Tuesday</div>
          <div className="time">Closed</div>
        </div>
        <div id="Wednesday" className="dateTime">
          <div className="day">Wednesday</div>
          <div className="time">{dinnerTakeOutHours}</div>
        </div>
        <div id="Thursday" className="dateTime">
          <div className="day">Thursday</div>
          <div className="time">{dinnerTakeOutHours}</div>
        </div>
        <div id="Friday" className="dateTime">
          <div className="day">Friday</div>
          <div className="time">11am - 2pm, {dinnerTakeOutHours}</div>
        </div>
        <div id="Saturday" className="dateTime">
          <div className="day">Saturday</div>
          <div className="time">11am - 2pm, {dinnerTakeOutHours}</div>
        </div>
      </div>
    </div>
  );
};

export default Hours;
