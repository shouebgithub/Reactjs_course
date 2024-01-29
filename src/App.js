import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { useState } from 'react';
import Alert from './components/Alert';
// import About from './components/About';

function App() {
  const [mode, setMode] = useState('light');  
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
   setAlert({
    msg: message,
    type: type
   });
   setTimeout(() => {
    setAlert(null);
   }, 1500);
  }
 
  const toggleMode = () => {
    if(mode === 'light' || mode === 'green' || mode === 'purple' || mode === 'yellow'){
      setMode('dark');
      document.body.style.backgroundColor = '#0a194c';
      showAlert("Dark mode has been enable", "success");
      document.title = "TextUtils - Dark Mode"    
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enable", "success");
      document.title = "TextUtils - Light Mode"
    } 
  }
  const toggleGreenMode = () => {
    // console.log(mode)
    if(mode === 'light' || mode === 'dark' || mode === 'purple' || mode === 'yellow'){
      setMode('green');
      document.body.style.backgroundColor = '#008000';
      showAlert("Green mode has been enable", "success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enable", "success")
    } 
  }
  const togglePurpleMode = () => {
    console.log(mode)
    if(mode === 'light' || mode === 'dark' || mode === 'green' || mode === 'yellow'){
      setMode('purple');
      document.body.style.backgroundColor = '#800080';
      showAlert("Purple mode has been enable", "success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enable", "success")
    } 
  }
  const toggleYellowMode = () => {
    // console.log(mode)
    if(mode === 'light' || mode === 'dark' || mode === 'purple' || mode === 'green'){
      setMode('yellow');
      document.body.style.backgroundColor = '#dfff00';
      showAlert("Yellow mode has been enable", "success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enable", "success")
    } 
  }
  return (       
    <>
    <Navbar title="TextUtils" mode={mode} aboutText = "About" toggleMode={toggleMode} toggleGreenMode ={toggleGreenMode} togglePurpleMode= {togglePurpleMode} toggleYellowMode = {toggleYellowMode} />
    <Alert alert={alert} />
    <div className="container my3">      
    {/* <About/> */}
     <TextForm showAlert={showAlert} mode={mode} heading="Enter the text to analyze" /> 
    </div>
    </>   
  );
}

export default App;
