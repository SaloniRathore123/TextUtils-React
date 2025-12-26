import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { useState } from 'react';
import{
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
function App() {
  const [mode, setMode] = useState('light'); //Whether dark mode is enable or not
  const [alert, setAlert] = useState(null);
  const [bgColor, setBgColor] = useState("white");

  const showAlert = (message, type) =>{
     setAlert({
      msg: message,
      type: type
     });
     setTimeout(() => {
        setAlert(null);
     }, 2000);
  }

  const toggleMode = () =>{
    if(mode === "light"){
      setMode("dark");
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
      showAlert("Dark mode is enabled", "success");
      setBgColor("#000");
    }else{
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("Light mode is enabled", "success");
      setBgColor("white");
    }
  }

   const changeColor = (color) => {
    setBgColor(color);
    showAlert("Background color changed", "success");
  };
  return (
     <> 
   <Router>
   <div style={{
        backgroundColor: bgColor,
        color: mode === "dark" ? "white" : "black",
        minHeight: "100vh"
      }}>
  {/*If I want <Navbar title="Textutils"/> then it is called props 
   <Navbar title="TextUtils" aboutText="About Us"/>*/}
   
   <Navbar title="TextUtils" aboutText="About Us" mode={mode} toggleMode={toggleMode} changeColor={changeColor}/>
   <Alert alert={alert}/>
   <div className="container my-3">
    <Routes>
            <Route path="/" element={<TextForm heading="Enter the text to analyze" showAlert={showAlert} mode={mode} />} />
            <Route path="/home" element={<TextForm heading="Enter the text to analyze" showAlert={showAlert} mode={mode} />} />
            <Route path="/about" element={<About />} />
    </Routes>
   </div>
  </div>
  </Router>
  </>
  );
}

export default App;
