import React from 'react';
import './App.css';
import { Header } from './components/header';
import Footer from './components/footer';
import Numbers from './components/numbers';

function createAlert() {
  alert('Alert created');
}

const pStyle = {
  fontSize: '1.3em',
  color: 'green'
};

function App() {
  return (
    <div className="App">
      <Header info="This is my message" />
      <p style={pStyle}>Main</p>
      <Numbers />
      <Footer trademark="My trademark" myalert={createAlert} />
    </div>
  );
}

export default App;
