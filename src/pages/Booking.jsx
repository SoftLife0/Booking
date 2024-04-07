import React, { useState } from 'react';
import Header from '../component/Header';
import CustomCalendar from '../component/CustomCalendar';
import InfoForm from '../component/InfoForm';
import CustomModal from '../component/CustomModal'; // Import the CustomModal component
import { Link } from 'react-router-dom';
import { CheckCircle } from 'react-bootstrap-icons';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import LoadingScreen from '../component/LoadingScreen';

function Booking() {
    const [selectedDate, setSelectedDate] = useState(null);
    const [showCalendar, setShowCalendar] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const [loading, setLoading] = useState(false);
    const [bookingData, setBookingData] = useState(null);
    const [nameData, setNameData] = useState(""); 
    const history = useHistory();

    const formatDate = (date) => {
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Months are 0-based
        const year = date.getFullYear().toString();
        return `${day}/${month}/${year}`;
    };

    const handleDateSelect = (date) => {
        setSelectedDate(date);
    }

    const handleNextClick = () => {
        setShowCalendar(false);
    };
    
    const handleSubmit = ({ name, telephone, date }) => {
        // setLoading(true);
        const requestBody = {
            name,
            phone: telephone,
            date: formatDate(date), // Format the date using formatDate function
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
            {loading && <LoadingScreen message="Redirecting..." />}

            {/* Success Modal */}
            <CustomModal
                show={showModal}
                onHide={() => setShowModal(false)}
                title={<b><CheckCircle/> Booking Successful</b>}
                body={<p>Hi {nameData}, Your booking has been successfully submitted!</p>}
                buttonText="Close"
                buttonVariant="secondary"
                buttonLink="/"
            />
        </div>
    );
}

export default Booking;
