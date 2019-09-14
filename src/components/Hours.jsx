import React from 'react';

const Hours = () => {
  const lunchHours = '11am - 2pm';
  const sundayLunchHours = '11am - 3pm';
  const dinnerHours = '5pm - 9pm';

  return (
    <div className="hours">
      <h2>Hours</h2>
      <div id="Sunday" className="dateTime">
        <div className="day">Sunday</div>
        <div className="time">{sundayLunchHours}</div>
      </div>
      <br />
      <div id="Monday" className="dateTime">
        <div className="day">Monday</div>
        <div className="time">{dinnerHours}</div>
      </div>
      <br />
      <div id="Tuesday" className="dateTime">
        <div className="day">Tuesday</div>
        <div className="time">{dinnerHours}</div>
      </div>
      <br />
      <div id="Wednesday" className="dateTime">
        <div className="day">Wednesday</div>
        <div className="time">{`${lunchHours} + ${dinnerHours}`}</div>
      </div>
      <br />
      <div id="Thursday" className="dateTime">
        <div className="day">Thursday</div>
        <div className="time">{`${lunchHours} + ${dinnerHours}`}</div>
      </div>
      <br />
      <div id="Friday" className="dateTime">
        <div className="day">Friday</div>
        <div className="time">{`${lunchHours} + ${dinnerHours}`}</div>
      </div>
      <br />
      <div id="Saturday" className="dateTime">
        <div className="day">Saturday</div>
        <div className="time">{`${lunchHours} + ${dinnerHours}`}</div>
      </div>
    </div>
  );
};

export default Hours;
