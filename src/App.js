
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from "react";
import Search from './components/search/search.js';
import Api from './Api.js';
import Description from './components/description/description.js';
import Header from './components/header/header.js';
import Footer from './components/footer/footer.js';
import {
  useNavigate,
  Routes,
  Route
} from "react-router-dom";


function App() {
  const navigate = useNavigate();
  const [savedInputText, setSavedInputText] = useState("");

  const navigateToResults = () => {
    // 👇️ navigate to /results
    navigate('/results');
  };

  // const navigateHome = () => {
  //   // 👇️ navigate to /
  //   navigate('/');
  // };

  return (

    <div>
      <Routes>
        <Route path="/" element={<Home switchToResults={navigateToResults} lyricInput={savedInputText} saveLyricInput={setSavedInputText} />} />
        <Route path="/results" element={<Results lyricInput={savedInputText} saveLyricInput={setSavedInputText} />} />
      </Routes>
    </div>


  );



}


function Home(props) {
  return (
    <div className="App">
      <Header />
      <div className="App-header">
        <Description />
        <Search switchToResults={props.switchToResults} saveLyricInput={props.saveLyricInput} />
      </div>
      <Footer />
    </div>);
}

function Results(props) {
  return (
    <div className="App">
      <Header />
      <div className="App-content">
        <Api lyricInput={props.lyricInput} />
        <p style={{ color: "white" }}>{props.lyricInput}</p>
      </div>
      <Footer />

    </div>

  );
}

export default App;


