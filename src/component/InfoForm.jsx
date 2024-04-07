import React, { useState } from 'react';
import LoadingScreen from './LoadingScreen';

function InfoForm({ selectedDate, onSubmit }) {
    const [name, setName] = useState('');
    const [telephone, setTelephone] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (name && telephone && selectedDate) {
            setLoading(true); // Show loading screen
            try {
                await onSubmit({ name, telephone, date: selectedDate });
            } catch (error) {
                console.error('Error submitting form:', error);
            } finally {
                setLoading(false); // Hide loading screen after submission
            }
        } else {
            alert('Please fill in all fields');
        }
    };

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="defaultCard">
                        <h5><b>Kindly fill in the form below</b></h5>
                        <form onSubmit={handleSubmit}>
                            <div className='mb-3'>
                                <label htmlFor="name" className='form-label'>Name:</label>
                                <input type="text" className='inputCard' placeholder='Enter Full Name' id="name" value={name} onChange={(e) => setName(e.target.value)} />
                            </div>
                            <div className='mb-3'>
                                <label htmlFor="telephone" className='form-label'>Telephone:</label>
                                <input type="tel" className='inputCard' placeholder='Enter Phone Number' id="telephone" value={telephone} onChange={(e) => setTelephone(e.target.value)} />
                            </div>
                            <br />
                            <button type="submit" className='pill-button'>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
            {loading && <LoadingScreen message="Submitting..." />} {/* Show loading screen if loading is true */}
        </div>
    );
}

export default InfoForm;
