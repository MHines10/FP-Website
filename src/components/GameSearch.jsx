import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/GameSearch.css";

export default function GameSearch() {
  const [games, setGames] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGame, setSelectedGame] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: "GET",
        url: "https://mmo-games.p.rapidapi.com/games",
        headers: {
          "X-RapidAPI-Key":
            "b496d3e7camsh49e1517c464e334p1e37eejsn4692002e4c38",
          "X-RapidAPI-Host": "mmo-games.p.rapidapi.com",
        },
      };
      const response = await axios.request(options);
      setGames(response.data);
    };
    fetchData();
  }, []);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSelect = (game) => {
    setSelectedGame(game);
  };

  const filteredGames = games.filter((game) =>
    game.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
          <GameModal/>
      </div>
      <div className="game-list-container">
        <ul className="game-list">
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
