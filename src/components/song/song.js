import React from 'react';
import './song.css'

export default function Song(props) {
    console.log(props)

    return (
        <div class="cards">
            <div class="card">
                <p class="title">{props.song.track_name} </p>
            <p class="artist">By: {props.song.artist_name}</p>
                </div>

        </div>
    )

}


