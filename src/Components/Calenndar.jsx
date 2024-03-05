// import format from "date-fns/format";
// import getDay from "date-fns/getDay";
// import parse from "date-fns/parse";
// import startOfWeek from "date-fns/startOfWeek";
// import React, { useState } from "react";
// import { Calendar, dateFnsLocalizer } from "react-big-calendar";
// import "react-big-calendar/lib/css/react-big-calendar.css";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";


// // const locales = {
// //     "en-US": require("date-fns/locale/en-US"),
// // };
// const locales={
//     "en-US":'date-fns/locale/en-US'
// };

// const localizer = dateFnsLocalizer({
//     format,
//     parse,
//     startOfWeek,
//     getDay,
//     locales,
// });

// const events = [
//     {
//         id: 1,
//         title: 'Meeting',
//         start: new Date(2024, 2, 7, 10, 0),
//         end: new Date(2024, 2, 7, 12, 0),
//       },
//       {
//         id: 2,
//         title: 'Appointment',
//         start: new Date(2024, 2, 8, 13, 0),
//         end: new Date(2024, 2, 8, 14, 0),
//       },
// ];

// export const CalendarPage=() =>{
//     const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });
//     const [allEvents, setAllEvents] = useState(events);

//     function handleAddEvent() {
        
//         for (let i=0; i<allEvents.length; i++){

import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import React, { useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const locales={
    "en-US":'date-fns/locale/en-US'
};
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const initialEvents = [
  {
    id: 1,
    title: 'Meeting',
    start: new Date(2024, 2, 7, 10, 0),
    end: new Date(2024, 2, 7, 12, 0),
  },
  {
    id: 2,
    title: 'Appointment',
    start: new Date(2024, 2, 8, 13, 0),
    end: new Date(2024, 2, 8, 14, 0),
  },
];

export const CalendarPage = () => {
  const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });
  const [allEvents, setAllEvents] = useState(initialEvents);

  const handleAddEvent = () => {
    setAllEvents([...allEvents, newEvent]);
    setNewEvent({ title: "", start: "", end: "" });
  };

  const handleRemoveEvent = (event) => {
    const updatedEvents = allEvents.filter((e) => e.id !== event.id);
    setAllEvents(updatedEvents);
  };

  return (
    <div className="App">
      <h1 className="text-2xl font-bold">Manage Your Tasks</h1>
      <div className="flex flex-col md:flex-row justify-between w-full bg-pink-100">
        <div className="w-full md:w-2/3">
          <Calendar
            localizer={localizer}
            events={allEvents}
            startAccessor="start"
            style={{ height: 500, margin: "50px" }}
            onSelectEvent={(event) => handleRemoveEvent(event)}
          />
        </div>
        <div className="w-full md:w-1/3 p-4 mt-[5%]">
          <h2 className="text-3xl mb-4">Add New Event</h2>
          <label className="text-xl font-bold">Title</label><br/>
          <input
            type="text"
            placeholder="Add Title"
            className="bg-gray-400 py-2 px-1 outline-none ml-7 mb-4"
            value={newEvent.title}
            onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
          /><br/>
          <label className="text-xl font-bold">Start Date/Time</label>
          <DatePicker
            placeholderText="Start Date"
            className="m-4 bg-gray-400 py-2 px-1"
            selected={newEvent.start}
            onChange={(start) => setNewEvent({ ...newEvent, start })}
            showTimeSelect
            timeIntervals={15}
            dateFormat="MMMM d, yyyy h:mm aa"
          /><br/>
          <label className="text-xl font-bold">End Date</label>
          <DatePicker
            placeholderText="End Date"
            className="m-4 bg-gray-400 py-2 px-1"
            showTimeSelect
            timeIntervals={15}
            dateFormat="MMMM d, yyyy h:mm aa"
            selected={newEvent.end}
            onChange={(end) => setNewEvent({ ...newEvent, end })}
          />
          <button
            className="m-4 bg-blue-400 py-2 px-1 w-[200px] hover:bg-blue-500 font-bold text-xl"
            onClick={handleAddEvent}
          >
            Add Event
          </button>
        </div>
      </div>
    </div>
  );
};

// export default CalendarPage;







//             const d1 = new Date (allEvents[i].start);
//             const d2 = new Date(newEvent.start);
//             const d3 = new Date(allEvents[i].end);
//             const d4 = new Date(newEvent.end);
      
//           console.log(d1 <= d2);
//           console.log(d2 <= d3);
//           console.log(d1 <= d4);
//           console.log(d4 <= d3);
            

//              if (
//               ( (d1  <= d2) && (d2 <= d3) ) || ( (d1  <= d4) &&
//                 (d4 <= d3) )
//               )
//             {   
//                 alert("CLASH"); 
//                 break;
//              }
    
//         }
        
        
//         setAllEvents([...allEvents, newEvent]);
//     }
//     const removeEvent = (eventId) => {
//         const updatedEvents = events.filter((event) => event.id !== eventId);
//         setEvents(updatedEvents);
//       };

//     return (
//         <div className="App">
//             <h1 className="text-2xl font-bold">Calendar</h1>
           
//             <div className="flex justify-start w-[100vw] bg-pink-100">
           
//             <div>
//             <Calendar localizer={localizer} events={allEvents} startAccessor="start"  style={{ height: 500, margin: "50px" }} />
//             </div>
//             <div className="w-[100%] mt-[10%] ">
//                 <h2 className="text-3xl">Add New Event</h2>
//                 <label className="text-xl font-bold">Title</label>
//                 <input type="text" placeholder="Add Title" className="bg-gray-400 py-2 px-1 outline-none ml-7" value={newEvent.title} onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })} /><br/>
//                 <labe className="text-xl font-bold">Start Date</labe>
//                 <DatePicker placeholderText="Start Date" className="m-4 bg-gray-400 py-2 px-1" selected={newEvent.start} onChange={(start) => setNewEvent({ ...newEvent, start })} /><br/>
//                 <label className="text-xl font-bold">End Date</label>
//                 <DatePicker placeholderText="End Date" className="m-4 bg-gray-400 py-2 px-1"  selected={newEvent.end} onChange={(end) => setNewEvent({ ...newEvent, end })} /><br/>
//                 <button className="m-4 bg-blue-400 py-2 px-1 w-[40%] hover:bg-blue-500 font-bold text-xl"  onClick={handleAddEvent}>
//                     Add Event
//                 </button>
//             </div>
            
//             </div>
//         </div>
//     );
// }


