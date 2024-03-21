import React, { useState } from 'react';
import Header from '../component/Header';
import CustomCalendar from '../component/CustomCalendar';
import InfoForm from '../component/InfoForm';

function Booking() {
    const [selectedDate, setSelectedDate] = useState(null);
    const [showCalendar, setShowCalendar] = useState(true);

    // Function to handle date selection
    const handleDateSelect = (date) => {
        setSelectedDate(date);
    }

    // Function to handle next button click
    const handleNextClick = () => {
        setShowCalendar(false); // Hide the calendar
    }

    return (
        <div>
            <Header />
            <section>
                <div className='container'>
                    <div className='row'>
                        <div>
                            <h2 style={{ fontFamily: 'Poppins, sans-serif' }}><b>Make an Appointment</b></h2>
                            <br />
                        </div>
                        <div className='col-md-12 d-flex justify-content-center' style={{ marginBottom: '0 5vw' }}>
                            {/* Conditionally render CustomCalendar */}
                            {showCalendar && <CustomCalendar onSelect={handleDateSelect} onNextClick={handleNextClick} />}
                            {!showCalendar && <InfoForm selectedDate={selectedDate} />}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Booking;