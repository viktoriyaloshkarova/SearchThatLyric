import axios from "axios";
import React, { useState, useEffect } from "react";
import spinner from './spinner.gif';


export function Api() {


    const [state, setState] = useState(null);

    useEffect(() => {
        axios
        .get(
            `http://api.musixmatch.com/ws/1.1/track.search?q_artist=justin bieber&page_size=3&page=1&s_track_rating=desc&apikey=${
          process.env.REACT_APP_KEY
        }`
        )
        .then(response => {
            console.log(response.data);
            setState(
                response.data

            );
        })
        .catch(err => console.log(err));
    }, []);

    if (state.message === undefined) {
        return (
            <div>
                <img
                    src={spinner}
                    alt="Loading..."
                    style={{ width: '200px', margin: ' 40px auto', display: 'block' }}
                />
            </div>
        )
    }
    else {
        return (
            <div>
                {/* <h1>{ state.message.body}</h1> */}
                {/* <h1>{state.heading}</h1>
            <p>{state.track_list}</p> */}
            </div>
            // <div>
            //         hii
            // </div>
        );
    }
}

