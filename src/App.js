import React, { useState } from 'react';
import Counter from './components/Counter';
import './styles/App.css';
import PostItem from './components/PostItem';

function App() {
  return (
    <div className="App">
      <PostItem />
      <PostItem />
      <PostItem />
      <PostItem />
    </div>
  );
}

export default App;
