import React from 'react';
import { IconContext } from "react-icons";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Story from './components/Story.js';



function App() {
  return (
    <div className="App">
      <IconContext.Provider value={{ style: {verticalAlign: 'middle'}, className: 'react-icons' }}>
        <Story />
      </IconContext.Provider>
    </div>
  );

}

export default App;
