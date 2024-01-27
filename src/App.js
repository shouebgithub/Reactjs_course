import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { useState } from 'react';
// import About from './components/About';

function App() {
  const [mode, setMode] = useState('light');  
  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#0a194c';
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
    } 
  }
  return (       
    <>
    <Navbar title="TextUtils" mode={mode} aboutText = "About" toggleMode={toggleMode} />
    <div className="container my3">      
    {/* <About/> */}
     <TextForm mode={mode} heading="Enter the text to analyze" /> 
    </div>
    </>   
  );
}

export default App;
