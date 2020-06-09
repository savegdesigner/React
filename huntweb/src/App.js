import React from 'react';
import Header from './components/Header/Header'
import './main.styles.css'
import Routes from './routes'

function App() {
  return (
    <div className="App">
      <Header/>

      <Routes/>
      
    </div>
  );
}

export default App;
