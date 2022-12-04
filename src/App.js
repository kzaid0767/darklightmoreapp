
import './App.css';
import Main from './Main';
import Navbar from './Navbar';
import { useState } from 'react';

function App() {

  const [darkMode, setMode] = useState(false)

  function toggleDarkMode(){
    setMode(prevState => !prevState)
  }

  return (
    <div className="container">
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Main darkMode={darkMode} />
    </div>
  );
}

export default App;
