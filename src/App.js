import './App.css'
import Home from './Home.jsx';
import React from 'react';
import Welcome from './Welcome.jsx';
import UsersList from './UsersList';
// import { useState } from 'react';
import AdminLogin from './AdminLogin';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import UserRequests from './UserRequests';

function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route exact path='/' Component={Welcome}/>
        <Route exact path='/home' Component={Home}/>
        <Route exact path='/login' Component={AdminLogin}/>
        <Route exact path='/users-list' Component={UsersList}/>
        <Route exact path='/requests' Component={UserRequests}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
