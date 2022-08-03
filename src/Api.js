import axios from "axios";
import React, { useState, useEffect } from "react";
import Song from "./components/song/song.js"
import spinner from "./spinner.gif"

export function Api() {

    const [state, setState] = useState(null);

    async function fetchData() {
        let user_input = "love"
        let response = await axios.get(`http://api.musixmatch.com/ws/1.1/track.search?q_lyrics=${user_input}&page_size=100&page=1&s_track_rating=desc&apikey=${
            process.env.REACT_APP_KEY
            }`)
        let data = await response.data
        setState(data)
    }

    useEffect(() => {
        fetchData()
    }, [])



    if (state === null) {
        return (
            <div>
                <img
                    src={spinner}
                    alt="Loading.."
                />
            </div>
        )
    }
    else {
        return (
            <div>
                {state.message.body.track_list.map(item => (

                    Song(item.track)
                ))}
            </div>
        )
    }

}

