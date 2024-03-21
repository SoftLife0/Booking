import React from 'react'
import Header from '../component/Header'
import logo from '../assets/Central-Uni-logo.png'


function Booking() {
  return (
    <div>
        <Header />

    <section>
        <div className='container'>
            <div className='row defaultCard'>
                <div className='col-md-6 offset-md-3 text-center'>
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
                </div>

                <div className='col-md-6'>
                </div>
            </div>
        </div>
        </section>
    </div>
  )
}


export default Booking