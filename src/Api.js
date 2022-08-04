import axios from "axios";
import React, { useState, useEffect } from "react";
import Song from "./components/song/song.js"
import spinner from "./loading.gif"

export default function Api(props) {

    const [state, setState] = useState(null);

    async function fetchData() {
        let response = await axios.get(`http://api.musixmatch.com/ws/1.1/track.search?q_lyrics=${props.lyricInput}&page_size=100&page=1&s_track_rating=desc&apikey=${
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
                   <Song song={item.track} />
                ))}
            </div>
        )
    }

}

