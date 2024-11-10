import { useState } from 'react';
import './App.css';
// import ReactDOM from "react-dom/client";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import About from './components/About';
import FormText from './components/FormText';
import Navbar from './components/Navbar';
import Alert from './components/Alert';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    // Automatically clear the alert after 2 seconds
    setTimeout(() => setAlert(null), 1000);
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      document.body.style.color = 'white';
      showAlert('Dark mode enabled', 'success');
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert('Light mode enabled', 'success');
    }
  };

  return (
    <>
      <Navbar title="TextUtils"  toggleMode={toggleMode} mode={mode} />
      <Alert alert={alert} />
      <FormText mode={mode} toggleMode={toggleMode}/>
  </>
  );
}

//  {     // <BrowserRouter>
//       {/* <Routes> */}
//       // <Route exact path='/' element={ />} />
//         // <Route exact path='/about' element={<About mode={mode} />} />
//       {/* </Routes> */}
//     // </BrowserRouter>
//   // );}
export default App;
