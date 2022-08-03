
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import Search from './components/search/search.js';
import Description from './components/description/description.js';
import Header from './components/header/header.js';
import Footer from './components/footer/footer.js';
import { Api } from './Api';

function App() {

  Api()

  return (
    <div className="App">
      <Header />
      <div className="App-header">
        <Description />
        <Search />
      </div>
      <Footer />
    </div>
  );
}

export default App;
