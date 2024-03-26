import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import './Landing.css';
// import logo from '../../assets/hero.png'

const Landing = () => {
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const history = useHistory();

  useEffect(() => {
    const countDownDate = () => {
      const now = new Date().getTime();
      const slotStart = new Date();
      slotStart.setHours(7, 0, 0, 0); // Set the start time to 8:00 am
      const slotEnd = new Date();
      slotEnd.setHours(11, 0, 0, 0); // Set the end time to 11:00 am
      const tenDaysFromNow = new Date();
      tenDaysFromNow.setDate(tenDaysFromNow.getDate() + 10); // 10 days from now

      if (now >= slotStart.getTime() && now <= slotEnd.getTime()) {
        // Inside the booking slot
        const timeLeft = slotEnd.getTime() - now;
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        setCountdown({ days, hours, minutes, seconds });
        setIsBookingOpen(true);
      } else {
        // Outside the booking slot
        setIsBookingOpen(false);
      }
    };

    const interval = setInterval(countDownDate, 1000);
    countDownDate(); // Run initially to set the initial countdown
    return () => clearInterval(interval); // Clean up interval on unmount
  }, []);

  const handleMakeAppointment = () => {
    history.push('/booking')
  };

  return (
    <div id="hero">
      <header id="header" className="d-flex align-items-center">
        <div className="container d-flex flex-column align-items-center">
          {/* <img src={logo} width={150} alt="" /> */}
          <h2 style={{ textAlign: 'center', fontWeight:'bold' }}>Ongoing Medical Screening Program. Book your appointment now !</h2>
          <div className="countdown d-flex justify-content-center" data-count={new Date().getFullYear() + '/' + (new Date().getMonth() + 1) + '/' + (new Date().getDate() + 10)}>
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
          <h5><b>Note</b>: Booking ends at 11:00am</h5>


          <div>
            {isBookingOpen && (
              <button onClick={handleMakeAppointment} className="pill-button mt-3" style={{ background: '#ff0000' }}><b>Make an Appointment</b></button>
            )}
          </div>

        </div>
      </header>
    </div>
  );
};

export default Landing;
