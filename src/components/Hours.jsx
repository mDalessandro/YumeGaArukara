import React from 'react';

const Hours = () => {
  const takeOutHours = '5pm - 9pm';

  return (
    <div className="hours">
      <h2>Hours (Take-out only*)</h2>
      <span>* To order, please DM on Instagram (@yumegaarukara) or walk up.</span>
      <div className="lastOrderTime">Last order at 8:50pm.</div>
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
  );
};

export default Hours;
