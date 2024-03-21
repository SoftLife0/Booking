import { useState, React} from 'react'
import Header from '../component/Header'
import logo from '../assets/Central-Uni-logo.png'
import Calendar from 'react-calendar'


function Booking() {
    const [date, setDate] = useState(new Date());

    const onChange = (selectedDate) => {
        setDate(selectedDate);
    }

  return (
    <div>
        <Header />

    <section>
        <div className='container'>
            <div className='row'>
                <div>
                    <h2 style={{fontFamily:'Plus Jakarta Display, sans-serif'}}><b>Make an Appointment</b></h2>
                    <br />
                </div>
                
                <div className='col-md-12 d-flex justify-content-center' style={{marginBottom:'0 5vw'}}>
                    <div className='custom-calendar-container'>
                        <h6>Choose a Date</h6>

                        <Calendar onChange={onChange} value={date} className="custom-calendar"/>
                        {console.log(date)}
                        <br />

                        <div>
                            <span>Selected Date: <b>{date.toDateString()}</b></span>
                        </div>
                    </div>
                </div>

                {/* <div className="col md 6">
                    <h4>hi</h4>
                </div> */}
            </div>
        </div>
        </section>
    </div>
  )
}


export default Booking


{/* <div className='col-md-6 offset-md-3 text-center'>
                    <img src={logo} alt='' style={{ width: '220px' }}/>
                    <p style={{textAlign:'center', width:'100%'}} >
                        <b>Kindly fill in the form to book a slot</b>
                    </p>
                </div>

                <div className='col-md-6'>
                    <form>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input type="text" className="inputCard" id="name" placeholder="Enter Full Name"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Telephone</label>
                            <input type="text" className="inputCard" id="name" placeholder="Enter Phone Number"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="Time" className="form-label">Telephone</label>
                            <input type="time" className="inputCard" id="name" placeholder="Enter Phone Number"/>
                        </div>
                    </form>
                </div> */}