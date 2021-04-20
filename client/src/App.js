import React,{useEffect, useState} from 'react'
import './App.css'
import Navbar from './components/pages/Navbar'
import Conatact from './components/pages/Conatact'

import {BrowserRouter as Router , Switch, Route} from 'react-router-dom'

import Home from './components/pages/Home'
import Loigin from './components/pages/Loigin'
import SignUp from './components/pages/SignUp'
import About from './components/pages/About'
import PageNotFound from './components/pages/PageNotFound'
import ProtectedRoute from './components/customHooks/ProtectedRoute'
import { callAboutPage } from './components/customHooks/useSignUpHooks'
const App = () => {
const [condition,setCondition] = useState(null);

useEffect(() =>{
const res = callAboutPage();
res.then((data) =>{
  if(data) setCondition(true);
}).catch((err) =>console.error(err))
},[])



  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <ProtectedRoute exact path="/about" component={About} condition={condition} />
        <Route exact path="/contact" component={Conatact}/>
        <Route exact path="/login" component={Loigin}/>
        <Route exact path="/signup" component={SignUp}/>
        <Route  component={PageNotFound}/>
      </Switch>
    </Router>
  )
}

export default App
