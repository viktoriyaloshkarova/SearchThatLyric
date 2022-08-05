import React from 'react';
import './song.css'

export default function Song(props) {
    //console.log(props)

    return (
        <div className="cards">
            <div className="card">
                <p className="title">{props.song.track_name} </p>
                <p className="artist">By: {props.song.artist_name}</p>
            </div>

        </div>
    )

}


