import React from 'react';
import '../css/App.css';
import MainContent from './MainContent';
import SearchBar from './SearchBar';

function App() {
  return (
    <div>
      <SearchBar />
      <MainContent />
    </div>
  );
}

export default App;
