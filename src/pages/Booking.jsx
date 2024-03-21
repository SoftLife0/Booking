import React, { useState } from 'react';
import Header from '../component/Header';
import CustomCalendar from '../component/CustomCalendar';
import InfoForm from '../component/InfoForm';

function Booking() {
    const [selectedDate, setSelectedDate] = useState(null);
    const [showCalendar, setShowCalendar] = useState(true);
    const [bookingData, setBookingData] = useState(null); // State to hold booking data

    const handleDateSelect = (date) => {
        setSelectedDate(date);
    }

    const handleSubmit = ({ name, telephone, date, time }) => {
        const requestBody = {
            name,
            phone: telephone,
            date: date.toDateString(), // Convert date to string
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
                return response.json(); // Parse response body as JSON
            } else {
                // Handle error response
                console.error('Booking failed.');
                throw new Error('Booking failed'); // Throw error to be caught in the next .catch block
            }
        })
        .then(data => {
            // Set the booking data received from the server
            setBookingData(data);
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
            {/* Display booking data if available */}
            {bookingData && (
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-12">
                            <div className="defaultCard">
                                <h5><b>Booking Details</b></h5>
                                <pre>{JSON.stringify(bookingData, null, 2)}</pre>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Booking;
