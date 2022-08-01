
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useState } from "react";

function App() {
  const [inputText, setInputText] = useState("");

  return (
    <div className="App">
      <header className="App-header">

        <p>
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
          <Button onClick={() => { setInputText(document.getElementById("search-input").value) }} variant="outline-success">Search</Button>
        </Form>

        <p>{inputText}</p>



      </header>
    </div>
  );
}

export default App;
