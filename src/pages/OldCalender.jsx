// import { useState, React} from 'react'
// import Header from '../component/Header'
// import logo from '../assets/Central-Uni-logo.png'
// import Calendar from 'react-calendar'
// import { Link } from 'react-router-dom/cjs/react-router-dom.min'


// function Booking() {
//     const [date, setDate] = useState(new Date());

//     const onChange = (selectedDate) => {
//         setDate(selectedDate);
//     }

//   return (
//     <div>
//         <Header />

//     <section>
//         <div className='container'>
//             <div className='row'>
//                 <div>
//                     <h2 style={{fontFamily:'Plus Jakarta Display, sans-serif'}}><b>Make an Appointment</b></h2>
//                     <br />
//                 </div>
                
//                 <div className='col-md-12 d-flex justify-content-center' style={{marginBottom:'0 5vw'}}>
//                     <div className='custom-calendar-container'>
//                         <h6>Choose a Date</h6>

//                         <Calendar onChange={onChange} value={date} className="custom-calendar"/>
//                         {console.log(date)}
//                         <br />

//                         <div>
//                             <span>Selected Date: <b>{date.toDateString()}</b></span>
//                         </div>
//                         <br />

//                         <div style={{ display: 'flex', justifyContent: 'center' }}>
//                             <Link to='' className='pill-button' style={{width:'50%', textDecoration:'none'}}>
//                                 Next
//                             </Link>
//                         </div>
//                     </div>
//                 </div>

//             </div>
//         </div>
//         </section>
//     </div>
//   )
// }


// export default Booking