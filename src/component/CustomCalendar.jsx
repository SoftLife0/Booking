import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function CustomCalendar({ onSelect, onNextClick }) {
    const [date, setDate] = useState(null);
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
                if (data && data.data && Array.isArray(data.data)) {
                    const availableDates = data.data.map(dateString => new Date(dateString));
                    setDisabledDates(availableDates);
                    // Set the initial date to the first available date
                    if (availableDates.length > 0) {
                        setDate(availableDates[0]);
                    }
                } else {
                    throw new Error('Available dates data is missing or not in the expected format');
                }
            })
            .catch(error => {
                console.error('Error fetching available dates:', error);
            });
    };

    const onChange = (selectedDate) => {
        if (disabledDates.some(disabledDate => selectedDate.toDateString() === disabledDate.toDateString())) {
            setDate(selectedDate);
            if (onSelect) {
                onSelect(selectedDate);
            }
        }
    };

    const tileDisabled = ({ date, view }) => {
        if (view === 'month') {
            // Disable Sundays and Saturdays
            if (date.getDay() === 0 || date.getDay() === 6) {
                return true;
            }
            // Disable dates not in the array of available dates
            return !disabledDates.some(disabledDate => {
                const disabledDateString = disabledDate.toISOString().slice(0, 10); // Format date as YYYY-MM-DD
                const dateString = date.toISOString().slice(0, 10);
                return dateString === disabledDateString;
            });
        }
    };

    return (
        <div className=''>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <h5>Choose a Date</h5>

                        <div className='custom-calendar-container'>
                            <Calendar onChange={onChange} value={date} tileDisabled={tileDisabled} className='custom-calendar'/>
                        </div>
                        <br />

                        <div>
                            <span>Selected Date: <b>{date ? date.toDateString() : ''}</b></span>
                        </div>

                        <br />
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <button className='pill-button' onClick={onNextClick} style={{ width: '50%' }}>Next</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CustomCalendar;
