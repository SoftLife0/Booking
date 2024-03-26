import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useState } from 'react'
import Booking from './pages/Booking';
import InfoForm from './component/InfoForm';
import Landing from './pages/Hero/Landing'
import './App.css'

function App() {

  return (
    <Router>
      <main>
          <Switch>
            <Route exact path="/booking" component={Booking} />                 
            <Route exact path="/info" component={InfoForm} />                 
            <Route exact path="/" component={Landing} />    
          </Switch>
      </main>
    </Router>  
  )
}

export default App
