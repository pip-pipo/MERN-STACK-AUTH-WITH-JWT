import React from 'react'
import './App.css'
import Navbar from './components/pages/Navbar'
import Conatact from './components/pages/Conatact'

import {BrowserRouter as Router , Switch, Route} from 'react-router-dom'

import Home from './components/pages/Home'
import Loigin from './components/pages/Loigin'
import SignUp from './components/pages/SignUp'
import About from './components/pages/About'
const App = () => {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/contact" component={Conatact}/>
        <Route exact path="/login" component={Loigin}/>
        <Route exact path="/signup" component={SignUp}/>
      </Switch>
    </Router>
  )
}

export default App
