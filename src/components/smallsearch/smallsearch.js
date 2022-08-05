import './smallsearch.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useState } from "react";

function SmallSearch(props) {
    const [inputText, setInputText] = useState("");

    let lyric = props.lyricInput;
    // // function search() {
    // //     console.log(e);
    // //     var searchInput = document.getElementById("search-input").value.toLowerCase()
    // //     setInputText(searchInput)
    // // }
    let search = (e) => {
        e.preventDefault()
        //convert input text to lower case
        // var lowerCase = e.target.value.toLowerCase();
        // setInputText(lowerCase);
        //console.log(e.target)
        var searchInput = document.getElementById("small-search-input").value.toLowerCase()
        setInputText(searchInput)
        props.saveLyricInput(searchInput)
        // lyric = searchInput
        props.switchToResults()
    };



    return (

        <div>

            <Form onSubmit={search} className="d-flex">
                <Form.Control
                    type="search"
                    defaultValue={lyric}
                    className="me-2"
                    aria-label="Search"
                    id="small-search-input"
                />
                <Button as="input" type="submit" value="Search" />
            </Form>

            <p>{inputText}</p>
        </div>
        // <div>
        //     <p>
        //         hello
        //     </p>
        // </div>

    );
}

export default SmallSearch;
