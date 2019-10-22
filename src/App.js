import React from 'react';
import './App.css';
import SectionWrapper from './components/SectionWrapper'

function App() {
  const style={
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width:'100%',
    height:'100%'
  };
  return (
    <div className="App">
      <SectionWrapper>
        <div style={style}>section0</div>
        <div style={style}>section1</div>
        <div style={style}>section2</div>
        <div style={style}>section3</div>
      </SectionWrapper>
    </div>
  );
}

export default App;
