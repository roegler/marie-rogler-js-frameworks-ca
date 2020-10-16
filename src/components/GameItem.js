import React from 'react'
import { Link } from 'react-router-dom';

function GameItem({ id, name, background_image, rating, released }) {
    return (
        <div>
            <h1>{name}</h1>
            <img src={background_image} alt={name} width="500"/>
            <p>Rating: {rating}</p>
            <h3>Released: {released}</h3>
            <Link to={ '/game/' + id }>Read more</Link>
        </div>

    )
}

export default GameItem;