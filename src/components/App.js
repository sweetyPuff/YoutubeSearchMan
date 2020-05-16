import React from 'react';
import '../css/App.css';
import MainContent from './MainContent';
import SearchBar from './SearchBar';

const style = {
  'maxWidth': '1680px',
  'margin': '0 auto',
  'fontFamily': 'Microsoft JhengHei'
}

function App() {
  return (
    <div style={style}>
      <SearchBar />
      <MainContent />
    </div>
  );
}

export default App;
