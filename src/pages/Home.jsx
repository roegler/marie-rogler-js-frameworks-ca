import { useState, useEffect } from "react";
import { BASE_URL } from "../components/Api";
import SearchGame from "../components/SearchGame";
import GameItem from "../components/GameItem";
import { Row, Col } from "react-bootstrap";

function Home() {
    // Storage
    const [games, setGames] = useState([]);
    const [filtredGames, setFilteredGames] = useState([]);

    // Getting the games from API
    useEffect(() => {
        fetch(BASE_URL)
            .then(response => response.json())
            .then(json => {
                setGames(json.results)
                setFilteredGames(json.results)
            })
            .catch(error => console.log(error));
    }, [])

    const searchGames = function (event) {
        console.log(event.target.value)
        const searchText = event.target.value.toLowerCase();
        const filteredArray = games.filter(g => {
            return g.name.toLowerCase().includes(searchText)
        })
        setFilteredGames(filteredArray);
    }

    // Using the stuff in storage
    return (
        <div>
            <div className="my-5">
            <SearchGame handleSearch={searchGames} />
            </div>
            <Row>
                {filtredGames.map(g => (
                    <Col>
                        <div className="mb-3">
                            <GameItem key={g.id} id={g.id} name={g.name} background_image={g.background_image} rating={g.rating} released={g.released} />
                        </div>
                    </Col>
                ))}
            </Row>
        </div>
    );
}

export default Home;