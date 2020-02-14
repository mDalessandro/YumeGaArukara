import React from 'react';

const Hours = () => {
  const hours = '11am - 2pm + 5pm - 9pm';
  const sundayHours = '11am - sold out';

  return (
    <div className="hours">
      <h2>Hours</h2>
      <div id="Sunday" className="dateTime">
        <div className="day">Sunday</div>
        <div className="time">{sundayHours}</div>
      </div>
      <br />
      <div id="Monday" className="dateTime">
        <div className="day">Monday</div>
        <div className="time">{hours}</div>
      </div>
      <br />
      <div id="Tuesday" className="dateTime">
        <div className="day">Tuesday</div>
        <div className="time">{hours}</div>
      </div>
      <br />
      <div id="Wednesday" className="dateTime">
        <div className="day">Wednesday</div>
        <div className="time">{hours}</div>
      </div>
      <br />
      <div id="Thursday" className="dateTime">
        <div className="day">Thursday</div>
        <div className="time">{hours}</div>
      </div>
      <br />
      <div id="Friday" className="dateTime">
        <div className="day">Friday</div>
        <div className="time">{hours}</div>
      </div>
      <br />
      <div id="Saturday" className="dateTime">
        <div className="day">Saturday</div>
        <div className="time">{hours}</div>
      </div>
    </div>
  );
};

export default Hours;
