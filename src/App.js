
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import Search from './components/search/search.js';
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
        <Route path="/" element={<Home switchToResults={navigateToResults} />} />
        <Route path="/results" element={<Results />} />
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
        <Search switchToResults={props.switchToResults} />
      </div>
      <Footer />
    </div>);
}

function Results() {
  return (
    <div className="App">
      <Header />
      <Footer />

    </div>

  );
}

export default App;


