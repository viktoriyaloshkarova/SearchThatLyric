import './search.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useState } from "react";

function Search() {
    const [inputText, setInputText] = useState("");
    function search() {
        var searchInput = document.getElementById("search-input").value.toLowerCase()
        setInputText(searchInput)
    }


    return (

        <div className="container">

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

            <p>{inputText}</p>
        </div>


    );
}

export default Search;
