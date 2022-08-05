import React from 'react';

export default function Song(props) {
    //console.log(props)

    return (
        <div>
            Song: {props.song.track_name}
            /
            By: {props.song.artist_name}

        </div>
    )

}

