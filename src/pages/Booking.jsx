import React, { useState } from 'react';
import Header from '../component/Header';
import CustomCalendar from '../component/CustomCalendar';
import InfoForm from '../component/InfoForm';

function Booking() {
    const [selectedDate, setSelectedDate] = useState(null);
    const [showCalendar, setShowCalendar] = useState(true);

    const handleDateSelect = (date) => {
        setSelectedDate(date);
    }

    const handleSubmit = ({ name, telephone, time }) => {
        const requestBody = {
            name,
            telephone,
            date: selectedDate.toDateString(),
            time
        };
        // Make POST request to the API
        fetch('http://localhost:3001/api/booking', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestBody)
        })
        .then(response => {
            if (response.ok) {
                // Handle successful response
                console.log('Booking successful!');
            } else {
                // Handle error response
                console.error('Booking failed.');
            }
        })
        .catch(error => {
            console.error('Error making booking:', error);
        });
    }

    const handleNextClick = () => {
        setShowCalendar(false);
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
                            {showCalendar && <CustomCalendar onSelect={handleDateSelect} onNextClick={handleNextClick} />}
                            {!showCalendar && <InfoForm selectedDate={selectedDate} onSubmit={handleSubmit} />}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Booking;
