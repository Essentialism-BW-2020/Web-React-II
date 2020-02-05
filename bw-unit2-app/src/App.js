import React from 'react';
import './App.css';

//components
import RegisterForm  from './components/RegisterForm';

function App() {
  return (
    <div className='app'>

      <div className='header'>
        <h1>Essentialism 2020</h1>
        <h4>In a world with everything shouting for attention, the disciplined pursuit of less has never been more needed</h4>
        <h4>Enter Essentialism: doing less but better so that you can make the highest possible contribution</h4>
      </div>
      
      <div>
        <RegisterForm />
      </div>

    </div>
  );
}

export default App;
