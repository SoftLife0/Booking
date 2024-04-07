import React, { useState, useEffect } from 'react';

function InfoForm({ selectedDate, onSubmit }) {
    const [name, setName] = useState('');
    const [telephone, setTelephone] = useState('');
    // const [selectedTimeSlot, setSelectedTimeSlot] = useState('');
    // const [availableTimeSlots, setAvailableTimeSlots] = useState([]);
    const [loading, setLoading] = useState(false);

    // useEffect(() => {
    //     if (selectedDate) {
    //         fetchAvailableTimeSlots(selectedDate);
    //     }
    // }, [selectedDate]);

    // const fetchAvailableTimeSlots = (date) => {
    //     setLoading(true);
    //     fetch(`https://forms.central.edu.gh/api/booking?date=${date.toISOString().slice(0, 10)}`)
    //         .then(response => {
    //             if (!response.ok) {
    //                 throw new Error('Failed to fetch available time slots');
    //             }
    //             return response.json();
    //         })
    //         .then(data => {
    //             console.log('Available time slots data:', data);
    //             setAvailableTimeSlots(data.data || []); // Update to access 'data' property
    //             setLoading(false);
    //         })
    //         .catch(error => {
    //             console.error('Error fetching available time slots:', error);
    //             setLoading(false);
    //         });
    // };
    
    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     if (name && telephone && selectedDate && selectedTimeSlot) {
    //         onSubmit({ name, telephone, date: selectedDate, time: selectedTimeSlot });
    //     } else {
    //         alert('Please fill in all fields');
    //     }
    // };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (name && telephone && selectedDate ) {
            onSubmit({ name, telephone, date: selectedDate });
        } else {
            alert('Please fill in all fields');
        }
    };

    return (
        <div>
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="defaultCard">
                            <h5><b>Kindly fill in the form below</b></h5>
                            <form>
                                <div className='mb-3'>
                                    <label htmlFor="name" className='form-label'>Name:</label>
                                    <input type="text" className='inputCard' placeholder='Enter Full Name' id="name" value={name} onChange={(e) => setName(e.target.value)} />
                                </div>
                                <div className='mb-3'>
                                    <label htmlFor="telephone" className='form-label'>Telephone:</label>
                                    <input type="tel" className='inputCard' placeholder='Enter Phone Number' id="telephone" value={telephone} onChange={(e) => setTelephone(e.target.value)} />
                                </div>
                                {/* <div className='mb-3'>
                                    <label className='form-label'>Select Time Slot:</label>
                                    <div className='time-slots'>
                                        {loading ? (
                                            <div>Loading...</div>
                                        ) : (
                                            availableTimeSlots.map((timeSlot, index) => (
                                                <div key={index} className={`time-slot-card ${selectedTimeSlot === timeSlot ? 'selected' : ''}`} onClick={() => setSelectedTimeSlot(timeSlot)}>
                                                    <span className="time">{timeSlot}</span>
                                                </div>
                                            ))
                                        )}
                                    </div>
                                </div> */}
                                <br />
                                <button type="submit" className='pill-button' onClick={handleSubmit}>Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default InfoForm;
