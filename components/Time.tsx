import React from 'react'
const moment = require('moment-timezone');

const Time = () => {
  const currentHour:string = moment.tz("America/Los_Angeles").format('HH');
  return (
    <div>{currentHour}</div>
  )
}

export default Time
