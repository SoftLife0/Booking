import React, { useState } from 'react';
import Header from '../component/Header';
import CustomCalendar from '../component/CustomCalendar';
import InfoForm from '../component/InfoForm';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'react-bootstrap-icons';
import { bookTimeSlot } from '../api/serverAPI';

// import { bookTimeSlot } from '../../server/server';

function Booking() {
    const [selectedDate, setSelectedDate] = useState(null);
    const [showCalendar, setShowCalendar] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const [bookingData, setBookingData] = useState(null); // State to hold booking data
    const [nameData, setNameData] = useState(""); // State to hold name data for modal

    const handleDateSelect = (date) => {
        setSelectedDate(date);
    }

    const handleSubmit = async ({ name, telephone, date, time }) => {
        const requestBody = {
            name,
            phone: telephone,
            date: date.toDateString(), // Convert date to string
            time
        };

        try {
            const data = await bookTimeSlot(requestBody);
            console.log('Booking successful!');
            setNameData(name); // Set name data for modal
            setShowModal(true); // Show modal on successful booking
            setBookingData(data); // Set the booking data received from the server
        } catch (error) {
            console.error('Error making booking:', error);
            // Handle error here, e.g., display error message to the user
        }
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

            {/* Success Modal */}
            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title style={{color: '#000'}}><b><CheckCircle/> Booking Successful</b></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Hi {nameData}, Your booking has been successfully submitted!</p>
                </Modal.Body>
                <Modal.Footer>
                    <Link to="/" className="btn btn-secondary">
                        Close
                    </Link>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default Booking;
