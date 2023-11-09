import React from 'react';
import './styles/App.css';
import AppRouter from './components/AppRouter';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/UI/navbar/Navbar';


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <AppRouter />
    </BrowserRouter>

  )
}

export default App;
