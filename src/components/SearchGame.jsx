import React from 'react';
import PropTypes from "prop-types";
import FormControl from "react-bootstrap/FormControl"

function SearchGame({ handleSearch }) {

    return (
        <div>
            <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" placeholder="Search games..." onChange={handleSearch} />
        </div>
    )
}

SearchGame.propTypes = {
    name: PropTypes.string.isRequired,
    background_image: PropTypes.string.isRequired,
    rating: PropTypes.string.isRequired,
};

export default SearchGame;