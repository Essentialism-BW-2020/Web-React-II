import React from 'react';
import './App.css';

import { Switch, Route } from 'react-router-dom';

//components
import RegisterForm  from './components/RegisterForm';
import NavBar from './components/NavBar';
import ProfileCard from './components/ProfileCard';
import ProileList from './components/ProfileList';
import ProfileList from './components/ProfileList';



function App() {
  return (
    <div className='app'>

      <div className='header'>

        <NavBar />

        <h4>In a world with everything shouting for attention, the disciplined pursuit of less has never been more needed</h4>
        <h4>Enter Essentialism: doing less but better so that you can make the highest possible contribution</h4>
      </div>
      
      <div>
        <Route path ='/register' component = {RegisterForm} />
        <Route path = '/profile' component = {ProfileList} />

        {/* <RegisterForm /> */}
      </div>

    </div>
  );
}

export default App;
