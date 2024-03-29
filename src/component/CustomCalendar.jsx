import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function CustomCalendar({ onSelect, onNextClick }) {
    const [date, setDate] = useState(new Date());
    const [disabledDates, setDisabledDates] = useState([]);

    useEffect(() => {
        fetchAvailableDates();
    }, []);

    const fetchAvailableDates = () => {
        fetch('https://forms.central.edu.gh/api/booking')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch available dates');
                }
                return response.json();
            })
            .then(data => {
                const availableDates = data.available_dates.map(dateString => new Date(dateString));
                setDisabledDates(availableDates);
            })
            .catch(error => {
                console.error('Error fetching available dates:', error);
            });
    };

    const onChange = (selectedDate) => {
        setDate(selectedDate);
        if (onSelect) {
            onSelect(selectedDate);
        }
    };

    const tileDisabled = ({ date, view }) => {
        if (view === 'month') {
            return date.getDay() === 0 || date.getDay() === 6 || disabledDates.some(disabledDate => date.toDateString() === disabledDate.toDateString());
        }
    };

    return (
        <div>
            <h6>Choose a Date</h6>
            <div className='custom-calendar-container'>
                <Calendar onChange={onChange} value={date} tileDisabled={tileDisabled} />
            </div>
            <br />

            <div>
                <span>Selected Date: <b>{date.toDateString()}</b></span>
            </div>

            <br />
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <button className='pill-button' onClick={onNextClick} style={{ width: '50%' }}>Next</button>
            </div>
        </div>
    );
}

export default CustomCalendar;
