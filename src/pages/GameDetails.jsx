import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../components/Api";

function GameDetails() {
    const [game, setGame] = useState([]);

    let { id } = useParams();
    useEffect(() => {
        fetch(BASE_URL + "/" + id)
            .then(response => response.json())
            .then(json => {
                setGame(json)
                console.log (json);
            })
            .catch(error => console.log(error));
    }, [])
    return (
        <div>
            <h1>{game.name}</h1>
            <img src={game.background_image} width="500"/>
            <p>{game.description_raw}</p>
            <a href={game.website} target="_blank">Go to website</a>

        </div>
    )
}

export default GameDetails; 