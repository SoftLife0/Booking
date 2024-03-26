import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import './Landing.css';

const Landing = () => {
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [endDate] = useState(() => {
    const today = new Date();
    const endDate = new Date(today.setDate(today.getDate() + 10)); // Set end date to 10 days from today
    return endDate;
  });
  const history = useHistory();

  useEffect(() => {
    const calculateCountdown = () => {
      const now = new Date().getTime();
      const timeLeft = endDate.getTime() - now;
      const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

      setCountdown({ days, hours, minutes, seconds });
    };

    const interval = setInterval(calculateCountdown, 1000);
    calculateCountdown(); // Run initially to set the initial countdown
    return () => clearInterval(interval); // Clean up interval on unmount
  }, [endDate]);

  const handleMakeAppointment = () => {
    history.push('/booking');
  };

  return (
    <div id="hero">
      <header id="header" className="d-flex align-items-center">
        <div className="container d-flex flex-column align-items-center">
          <h2 style={{ textAlign: 'center', fontWeight:'bold' }}>Ongoing Medical Screening Program. Book your appointment now !</h2>
          <div className="countdown d-flex justify-content-center" data-count={endDate.toLocaleDateString()}>
            <div className="countdown-item">
              <h3>{countdown.days}</h3>
              <h4>Days</h4>
            </div>
            <div className="countdown-item">
              <h3>{countdown.hours}</h3>
              <h4>Hours</h4>
            </div>
            <div className="countdown-item">
              <h3>{countdown.minutes}</h3>
              <h4>Minutes</h4>
            </div>
            <div className="countdown-item">
              <h3>{countdown.seconds}</h3>
              <h4>Seconds</h4>
            </div>
          </div>
          <h5><b>Note</b>: Screening ends in 10 days</h5>
          <div>
            <button onClick={handleMakeAppointment} className="pill-button mt-3" style={{ background: '#ca181e' }}><b>Book an Appointment</b></button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Landing;
