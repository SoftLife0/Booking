import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import './Landing.css';

const Landing = () => {
  const [hours, setHours] = useState('');
  const [minutes, setMinutes] = useState('');
  const [seconds, setSeconds] = useState('');
  const [period, setPeriod] = useState('');
  const [remainingDays, setRemainingDays] = useState(40); // Initial countdown of 40 days
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

    // Calculate remaining days based on the difference between the current time and the start time
    const calculateRemainingDays = () => {
      const now = new Date();
      const gmtNow = new Date(now.getTime() + now.getTimezoneOffset() * 60000); // Convert to GMT time
      const startOfGmtDay = new Date(gmtNow.getFullYear(), gmtNow.getMonth(), gmtNow.getDate());
      const timeDifference = gmtNow.getTime() - startOfGmtDay.getTime();
      const daysElapsed = Math.floor(timeDifference / (1000 * 60 * 60 * 24)); // Number of elapsed 24-hour periods
      const remainingDays = 40 - daysElapsed; // Countdown starts from 40 days
      setRemainingDays(remainingDays > 0 ? remainingDays : 0); // Ensure remaining days is never negative
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
        <div className="container d-flex flex-column align-items-center" style={{padding:'0 5px'}}>
          <h2 style={{ textAlign: 'center', fontWeight:'bold' }}>Annual Medical Screening Program. Book your appointment now !</h2>
          <h5><b>Screening Ends in {remainingDays} day(s) 👇</b></h5>

          <div className="countdown d-flex justify-content-center">
            <div className="countdown-item">
              <h3>{remainingDays}</h3>
              <h4>Days(s)</h4>
            </div>
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
