import React from 'react'
import './App.css';
import Header from './components/header/header';
import Radio from './components/radio/radio';

function App() {
  return (
    <div className="App">
      <Header />
      <Radio />
      <Sidebar />
    </div>
  );
}

export default App;
