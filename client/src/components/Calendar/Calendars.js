import React from 'react';
// import {Calendar} from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';


const events = [
  {
    start: new Date(),
    end: new Date(moment().add(1, 'days')),
    title: 'Monday Schedule'
  },
  {
    start: new Date(moment().add(1, 'days')),
    end: new Date(moment().add(2, 'days')),
    title: 'Tuesday Schedule'
  },
  {
    start: "Tuesday",
    end: "Thursday",
    title: 'Jons Event'
  },
  // Add more events here according to your schedule
];

export function   Calendars() {
  return (
    <div>
      {/* <Calendar
        events={events}
        startAccessor="start"
        endAccessor="end"
        titleAccessor="title"
        defaultDate={new Date()}
        views={['month', 'week', 'day']}
      /> */}
    </div>
  );
}