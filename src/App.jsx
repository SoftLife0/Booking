import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useState } from 'react'
import Booking from './pages/Booking';
import InfoForm from './component/InfoForm';
import './App.css'

function App() {

  return (
    <Router>
      <main>
          <Switch>
            <Route exact path="/" component={Booking} />                 
            <Route exact path="/info" component={InfoForm} />                 
          </Switch>
      </main>
    </Router>  
  )
}

export default App
