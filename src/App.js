
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
import React, { useState } from "react";
import Search from './components/search.js';

function App() {
  // const [inputText, setInputText] = useState("");
  // function search() {
  //   var searchInput = document.getElementById("search-input").value.toLowerCase()
  //   setInputText(searchInput)
  // }


  return (
    <div className="App">
      <header className="App-header">

        {/* <p>
          Search That Lyric
        </p>
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
            id="search-input"
          />
          <Button onClick={() => { search() }} variant="outline-success">Search</Button>
        </Form>

        <p>{inputText}</p> */}
        <Search />



      </header>
    </div>
  );
}

export default App;
