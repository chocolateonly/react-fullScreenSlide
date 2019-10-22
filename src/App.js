import React from 'react';
import './App.css';
import SectionWrapper from './components/SectionWrapper'

function App() {
  return (
    <div className="App">
      <SectionWrapper>
        <div>section0</div>
        <div>section1</div>
        <div>section2</div>
        <div>section3</div>
      </SectionWrapper>
    </div>
  );
}

export default App;
