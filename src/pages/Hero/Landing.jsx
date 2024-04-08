import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import './Landing.css';

const Landing = () => {
  const [hours, setHours] = useState('');
  const [minutes, setMinutes] = useState('');
  const [seconds, setSeconds] = useState('');
  const [period, setPeriod] = useState('');
  const [remainingDays, setRemainingDays] = useState(40); 
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

    const updateRemainingDays = () => {
      const now = new Date();
      const startOfToday = new Date(now.getFullYear(), now.getMonth(), now.getDate());
      
      if (now.getHours() === 0 && now.getMinutes() === 0 && now.getSeconds() === 0) {
        // If it's the start of a new day, reduce remaining days by 1
        setRemainingDays(prevDays => (prevDays > 0 ? prevDays - 1 : 0));
      }
    };

    updateRemainingDays(); // Check if remaining days need to be updated initially
    const updateDaysInterval = setInterval(updateRemainingDays, 1000); // Check every second

    return () => {
      clearInterval(currentTimeInterval);
      clearInterval(updateDaysInterval);
    };
  }, []);

  const handleMakeAppointment = () => {
    history.push('/booking');
  };

  return (
    <div id="hero">
      <header id="header" className="d-flex align-items-center">
        <div className="container d-flex flex-column align-items-center" style={{ padding: '0 5px' }}>
          <h2 style={{ textAlign: 'center', fontWeight: 'bold' }}>Annual Medical Screening Program. Book your appointment now !</h2>
          <h5><b>Screening Ends on Friday 31st May 2024 👇</b></h5>

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
