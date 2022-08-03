import React from 'react';

export default function Song(data) {
    console.log(data)
    return (
        <div>
            Song: {data.track_name}
            /
            By: {data.artist_name}

        </div>
    )

}

