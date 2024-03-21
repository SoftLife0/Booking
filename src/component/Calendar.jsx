// import React, { useState } from 'react';
// import Calendar from 'react-calendar';

// function CustomCalendar() {
//     const [date, setDate] = useState(new Date());

//     const onChange = (selectedDate) => {
//         setDate(selectedDate);
//         onSelectDate(selectedDate);
//     }

//     return (
//         <div>
//             <h6>Choose a Date</h6>
//             <div className='custom-calendar-container'>
//                 <Calendar onChange={onChange} value={date} className='custom-calendar' />
//             </div>
//             <br />

//             <div>
//                 <span>Selected Date: <b>{date.toDateString()}</b></span>
//             </div>
//         </div>
//     );
// }

// export default CustomCalendar;