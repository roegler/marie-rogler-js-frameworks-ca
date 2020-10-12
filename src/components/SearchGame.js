import React from "react";
import PropTypes from "prop-types";

function SearchGame({ handleSearch }) {
   
    return (
        <div>
            <input placeholder="Search games..." onChange={handleSearch} />
        </div>
    )
    
}

SearchGame.propTypes = {
    name: PropTypes.string.isRequired,
    background_image: PropTypes.string.isRequired,
    rating: PropTypes.string.isRequired,
};

export default SearchGame;