import React, { useState } from 'react';
import Header from '../component/Header';
import CustomCalendar from '../component/CustomCalendar';
import InfoForm from '../component/InfoForm';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'react-bootstrap-icons';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';


function Booking() {
    const [selectedDate, setSelectedDate] = useState(null);
    const [showCalendar, setShowCalendar] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const [loading, setLoading] = useState(false)
    const [bookingData, setBookingData] = useState(null);
    const [nameData, setNameData] = useState(""); 
    const history = useHistory();

    const handleDateSelect = (date) => {
        setSelectedDate(date);
    }

    const handleSubmit = ({ name, telephone, date, time }) => {
        // setLoading(true);
        const requestBody = {
            name,
            phone: telephone,
            date: date.toDateString(), // Convert date to string
            time
        };
        // Make POST request to the API
        fetch('https://forms.central.edu.gh/api/booking', {
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
                setNameData(name); // Set name data for modal
                setShowModal(true); // Show modal on successful booking
            } else {
                // Handle error response
                console.error('Booking failed.');
                throw new Error('Booking failed'); // Throw error to be caught in the next .catch block
            }
        })
        .then(data => {
            // Set the booking data received from the server
            setBookingData(data);
        
            setTimeout(() => {
                setLoading(true); // Show loading screen
                setTimeout(() => {
                    setLoading(false); // Hide loading screen
                    history.push("/"); // Redirect to the landing page
                }, 3000); // Redirect after 5 seconds
            }, 3000); // Show loading screen after 5 seconds
        })
        .catch(error => {   
            setLoading(false);
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
                            <h3 style={{ fontFamily: 'Poppins, sans-serif' }}><b>Book an Appointment</b></h3>
                            <br />
                        </div>
                        <div className='col-md-12 d-flex justify-content-center' style={{ marginBottom: '0 5vw' }}>
                            {showCalendar && <CustomCalendar onSelect={handleDateSelect} onNextClick={handleNextClick} />}
                            {!showCalendar && <InfoForm selectedDate={selectedDate} onSubmit={handleSubmit} />}
                        </div>
                    </div>
                </div>
            </section>


            {/* Loading Screen */}
            {loading && (
                <div id="loading" style={{ height: '100vh', width: '100vw', display: 'flex', backgroundColor: '#fff', position: 'fixed', top: 0, alignItems: 'center', justifyContent: 'center', zIndex: 9999 }}>
                    <div>
                        <div style={{ width: '100%', textAlign: 'center' }}>
                            <div className="spinner-border m-5" style={{ width: '3rem', height: '3rem' }} role="status">
                                <span className="sr-only"></span>
                            </div>
                            <h6 style={{ textAlign: 'center' }}>Redirecting.....</h6>
                        </div>
                    </div>
                </div>
            )}

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