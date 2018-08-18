import React from 'react';

const Hours = () => {
  const justDinnerHours = '5 PM - 9 PM';
  const fullDayHours = '11 AM - 2 PM, 5 PM - 9 PM';

  return (
    <div className="hours">
      <h2>We&apos;re Open During These Hours</h2>
      <div id="Monday" className="dateTime">
        <div className="day">Monday</div>
        <div className="time">Closed</div>
      </div>
      <div id="Tuesday" className="dateTime">
        <div className="day">Tuesday</div>
        <div className="time">{justDinnerHours}</div>
      </div>
      <div id="Wednesday" className="dateTime">
        <div className="day">Wednesday</div>
        <div className="time">{justDinnerHours}</div>
      </div>
      <div id="Thursday" className="dateTime">
        <div className="day">Thursday</div>
        <div className="time">{justDinnerHours}</div>
      </div>
      <div id="Friday" className="dateTime">
        <div className="day">Friday</div>
        <div className="time">{fullDayHours}</div>
      </div>
      <div id="Saturday" className="dateTime">
        <div className="day">Saturday</div>
        <div className="time">{fullDayHours}</div>
      </div>
      <div id="Sunday" className="dateTime">
        <div className="day">Sunday</div>
        <div className="time">Closed</div>
      </div>
    </div>
  );
};

export default Hours;
