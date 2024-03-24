import React, { useState } from 'react';

function InfoForm({ selectedDate, onSubmit }) {
    const [name, setName] = useState('');
    const [telephone, setTelephone] = useState('');
    const [selectedTimeSlot, setSelectedTimeSlot] = useState('');
    
    const dummyTimeSlots = ['9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM'];

    const handleSubmit = (event) => {
        event.preventDefault();
        // Check if all required fields are filled
        if (name && telephone && selectedDate && selectedTimeSlot) {
            onSubmit({ name, telephone, date: selectedDate, time: selectedTimeSlot });
        } else {
            alert('Please fill in all fields');
        }
    }

    return (
        <div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-12">
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
                                <div className='mb-3'>
                                    <label className='form-label'>Select Time Slot:</label>
                                    <div className='time-slots'>
                                        {dummyTimeSlots.map((timeSlot, index) => (
                                            <div key={index} type="button" className={`time-slot-card ${selectedTimeSlot === timeSlot ? 'selected' : ''}`} onClick={() => setSelectedTimeSlot(timeSlot)} style={{border:'nonezz'}}>
                                                <span className="time">{timeSlot}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

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
