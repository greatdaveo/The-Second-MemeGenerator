// import React from 'react';
import Header from './components/Header';
import Meme from './components/Meme';
import './App.css';

// Importation of the Api code
import ApiCode from './components/ApiCode';

function App() {
  return (
    <div className="App">
      <Header />
      <Meme />

      {/* This is for the learning of fetching data from API */}
      {/* <ApiCode /> */}
    </div>
  );
}

export default App; 
