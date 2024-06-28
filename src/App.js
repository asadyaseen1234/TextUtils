import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      message: message,
      type: type
    })
    setTimeout(() =>{
      setAlert(null);
    },1500);
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode  ('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark Mode has been enable", "success");
      document.title = "TextUtils - Dark Mode";

    }
    else{
      setMode ('light');
      document.body.style.backgroundColor = 'white';
      showAlert("light Mode has been enable", "success");
      document.title = "TextUtils - Light Mode";
    }
  }

  

  return (
  <>
  

    <BrowserRouter>
    
    <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode}  toggleMode={toggleMode}/>
      <Alert alert={alert} />
      <Routes>
        <Route exact path="/" element={
          <TextForm showAlert={showAlert} heading ="Enter the text to Analyze Below"  mode={mode} />
        } />
        <Route exact path="/About" element={            
          <About/>
        } />
      </Routes>
    </BrowserRouter>

    
  </>
  );
}

export default App;
