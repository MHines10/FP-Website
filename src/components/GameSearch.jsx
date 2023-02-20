import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/GameSearch.css";

export default function GameSearch() {
  // Set initial state using useState hooks
  const [games, setGames] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGame, setSelectedGame] = useState(null);

  // Fetch game data using useEffect hook on component mount
  useEffect(() => {
    const fetchData = async () => {
      // Set headers for API request
      const options = {
        method: "GET",
        url: "https://mmo-games.p.rapidapi.com/games",
        headers: {
          "X-RapidAPI-Key":
            "b496d3e7camsh49e1517c464e334p1e37eejsn4692002e4c38",
          "X-RapidAPI-Host": "mmo-games.p.rapidapi.com",
        },
      };
      // Fetch data using axios and update games state
      const response = await axios.request(options);
      setGames(response.data);
    };
    fetchData();
  }, []);

  // Update search term state when input value changes
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  // Update selected game state when a game is clicked in the list
  const handleSelect = (game) => {
    setSelectedGame(game);
  };

  // Filter games based on search term
  const filteredGames = games.filter((game) =>
    game.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Render search bar, game list, and selected game information
  return (
    <div className="game-search-container">
      <div className="gamesearch-container"></div>
      <div className="search-container">
        <input
          className="search-input"
          placeholder="Search for a Game Title"
          value={searchTerm}
          onChange={handleSearch}
        />
        <GameModal /> {/* Missing implementation of GameModal */}
      </div>
      <div className="game-list-container">
        <ul className="game-list">
          {/* Map over filtered games and render as list items */}
          {filteredGames.map((game) => (
            <li
              className="game-item"
              key={game.title}
              onClick={() => handleSelect(game)}
            >
              {game.title}
            </li>
          ))}
        </ul>
      </div>
      <div className="selected-game-container">
        {/* Display selected game information if there is a selected game */}
        {selectedGame ? (
          <div>
            <img
              src={selectedGame.thumbnail}
              alt=""
              className="selected-game-img"
            />
            <h2 className="selected-game-title">{selectedGame.title}</h2>
            <p className="selected-game-description">
              {selectedGame.short_description}
            </p>
            <a href={selectedGame.game_url}>Play Now</a>
          </div>
        ) : null}
      </div>
    </div>
  );
}
