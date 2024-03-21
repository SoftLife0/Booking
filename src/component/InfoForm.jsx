import React, { useState } from 'react';

function InfoForm({ selectedDate }) {
    const [name, setName] = useState('');
    const [telephone, setTelephone] = useState('');
    // State for time slots
    const [timeSlots, setTimeSlots] = useState([]);

    // Function to handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission
    }

    // Dummy time slots (replace with your actual time slot logic)
    const dummyTimeSlots = ['9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM'];

    return (
        <div>

            <div className="container">
                <div className="row justify-content-around">
                    <div className="col-md-6">
                        <div className="defaultCard">
                            <h4><b>Kindly fill in the form below</b></h4>
                        <form onSubmit={handleSubmit}>
                            <div className='mb-3'>
                                <label htmlFor="name" className='form-label'>Name:</label>
                                <input type="text" className='inputCard' placeholder='Enter Full Name' id="name" value={name} onChange={(e) => setName(e.target.value)} />
                            </div>
                            <div className='mb-3'>
                                <label htmlFor="telephone">Telephone:</label>
                                <input type="tel" className='inputCard' placeholder='Enter Phone Number' id="telephone" value={telephone} onChange={(e) => setTelephone(e.target.value)} />
                            </div>
                            {/* Display time slots */}
                            <div>
                                <label>Time Slots:</label>
                                <div className='time-slots'>
                                {dummyTimeSlots.map((time, index) => (
                                    <div key={index} className="time-slot-card">
                                        <span className="time">{time}</span>
                                    </div>
                                ))}
                                </div>
                            </div>
                            <button type="submit">Submit</button>
                        </form>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default InfoForm;
