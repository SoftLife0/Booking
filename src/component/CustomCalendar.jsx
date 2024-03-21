import React, { useState } from 'react';
import Calendar from 'react-calendar';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

function CustomCalendar({ onSelect, onNextClick }) {
    const [date, setDate] = useState(new Date());

    const onChange = (selectedDate) => {
        setDate(selectedDate);
        if (onSelect) {
            onSelect(selectedDate);
        }
    }

    return (
        <div>
            <h6>Choose a Date</h6>
            <div className='custom-calendar-container'>
                <Calendar onChange={onChange} value={date} className='custom-calendar' />
            </div>
            <br />

            <div>
                <span>Selected Date: <b>{date.toDateString()}</b></span>
            </div>

            <br />
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                {/* Next button */}
                <button className='pill-button' onClick={onNextClick} style={{width:'50%'}}>Next</button>
            </div>
        </div>
    );
}

export default CustomCalendar;