import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import './Landing.css';

const Landing = () => {
  const [hours, setHours] = useState('');
  const [minutes, setMinutes] = useState('');
  const [seconds, setSeconds] = useState('');
  const [period, setPeriod] = useState('');
  const [remainingDays, setRemainingDays] = useState(0);
  const history = useHistory();

  useEffect(() => {
    const updateCurrentTime = () => {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const seconds = now.getSeconds();
      const period = hours < 12 ? 'AM' : 'PM';
      const formattedHours = hours % 12 || 12;

      setHours(formattedHours);
      setMinutes(minutes < 10 ? '0' + minutes : minutes);
      setSeconds(seconds < 10 ? '0' + seconds : seconds);
      setPeriod(period);
    };

    updateCurrentTime();
    const currentTimeInterval = setInterval(updateCurrentTime, 1000);

    const calculateRemainingDays = () => {
      const now = new Date();
      const endTimeOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
      const timeDifference = endTimeOfDay.getTime() - now.getTime();
      const daysDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
      setRemainingDays(prevDays => {
        if (timeDifference <= 0) {
          return prevDays + 1; // Increment by 1 when the day ends
        } else {
          return prevDays;
        }
      });
    };

    calculateRemainingDays(); // Calculate remaining days initially
    const remainingDaysInterval = setInterval(calculateRemainingDays, 1000); // Update every second

    return () => {
      clearInterval(currentTimeInterval);
      clearInterval(remainingDaysInterval);
    };
  }, []);

  const handleMakeAppointment = () => {
    history.push('/booking');
  };

  return (
    <div id="hero">
      <header id="header" className="d-flex align-items-center">
        <div className="container d-flex flex-column align-items-center">
          <h2 style={{ textAlign: 'center', fontWeight:'bold' }}>Annual Medical Screening Program. Book your appointment now !</h2>
          <h5><b>Screening Ends in 40 days 👇</b></h5>

          <div className="countdown d-flex justify-content-center">
            {/* Remaining days */}
            <div className="countdown-item">
              <h3>{remainingDays}</h3>
              <h4>Days</h4>
            </div>

            {/* Current time */}
            <div className="countdown-item">
              <h3>{hours}</h3>
              <h4>Hours</h4>
            </div>
            <div className="countdown-item">
              <h3>{minutes}</h3>
              <h4>Minutes</h4>
            </div>
            <div className="countdown-item">
              <h3>{seconds}</h3>
              <h4>Seconds</h4>
            </div>
            <div className="countdown-item">
              <h3>{period}</h3>
            </div>
            
          </div>
          <div>
            <button onClick={handleMakeAppointment} className="pill-button mt-3" style={{ background: '#ca181e' }}><b>Book an Appointment</b></button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Landing;
