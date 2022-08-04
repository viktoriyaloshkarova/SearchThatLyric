import './search.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useState } from "react";

function Search(props) {
    const [inputText, setInputText] = useState("");
    // function search() {
    //     console.log(e);
    //     var searchInput = document.getElementById("search-input").value.toLowerCase()
    //     setInputText(searchInput)
    // }
    let search = (e) => {
        e.preventDefault()
        //convert input text to lower case
        // var lowerCase = e.target.value.toLowerCase();
        // setInputText(lowerCase);
        console.log(e.target)
        var searchInput = document.getElementById("search-input").value.toLowerCase()
        setInputText(searchInput)
        props.switchToResults()
    };



    return (

        <div className="container">

            <Form onSubmit={search} className="d-flex">
                <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    id="search-input"
                />
                <Button as="input" type="submit" value="Search" />
            </Form>

            <p>{inputText}</p>
        </div>


    );
}

export default Search;
