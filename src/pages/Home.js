import React from 'react'
import { BASE_URL } from "../components/Api";

function GameList() {
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
            return g.title.toLowerCase().startsWith(searchText)
        })
        setFilteredGames(filteredArray);
    }

    // Using the stuff in storage
    return (
        <div>
            <SearchGame handleSearch={searchGames} />
            {filtredGames.map(g => (
                <GameItem key={g.name} background_image={g.background_image} rating={g.rating} released={g.released}/>
            ))}
        </div>
    );
}

export default GameList;