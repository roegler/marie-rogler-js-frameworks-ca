import React from 'react'

function GameItem({ name, background_image, rating, released }) {
    return (
        <div>
            <h1>{name}</h1>
            <img src={background_image} alt={name} height="500"/>
            <p>Rating: {rating}</p>
            <h3>Released: {released}</h3>
        </div>

    )
}

export default GameItem;