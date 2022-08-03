import axios from "axios";
import React, { useState, useEffect } from "react";
import spinner from './spinner.gif';


export function Api() {

    const [state, setState] = useState(null);

    async function fetchData() {
        let response = await axios.get(`http://api.musixmatch.com/ws/1.1/track.search?q_artist=justin bieber&page_size=3&page=1&s_track_rating=desc&apikey=${
            process.env.REACT_APP_KEY
            }`)
        let data = await response.data
        setState(data)
    }

    useEffect(() => {
        fetchData()
    }, [])

    console.log(state)

    if (state === null) {
        return (
            <div>undefined</div>
        )
    }
    else {
        return (
            <div>
                <p>{state.message.body.track_list.map(item => (item.track.track_name)) } </p>
            </div>
        )
    }

}

