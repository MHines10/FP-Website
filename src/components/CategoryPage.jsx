import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/CategoryPage.css'

export default function CategoryPage() {
  // Initializing states using useState hook
  
  // for storing list of games
  const [games, setGames] = useState([]);
  // for storing selected category
  const [selectedCategory, setSelectedCategory] = useState('shooter');
  // for storing loading state
  const [loading, setLoading] = useState(false);

  // Function for fetching games based on selected category
  const fetchGames = async (category) => {
    // setting loading state to true
    setLoading(true);
    const options = {
      method: 'GET',
      url: 'https://mmo-games.p.rapidapi.com/games',
      params: {category: category},
      headers: {
        'X-RapidAPI-Key': 'b496d3e7camsh49e1517c464e334p1e37eejsn4692002e4c38',
        'X-RapidAPI-Host': 'mmo-games.p.rapidapi.com'
      }
    };
    try {
      // sending GET request using axios module
      const response = await axios.request(options);
      // setting list of games to state
      setGames(response.data);
      // setting loading state to false
      setLoading(false);
    } catch (error) {
       // logging errors to console
      console.error(error);
    }
  }
  // UseEffect hook for calling fetchGames function whenever selected category changes
  useEffect(() => {
    fetchGames(selectedCategory);
  }, [selectedCategory]);

  return (
    <div>
      <h2 >Games List</h2>
      <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
        {/* Dropdown menu for selecting category */}
        <option value="shooter">Shooter</option>
        <option value="role-playing">Role-Playing</option>
        <option value="strategy">Strategy</option>
        <option value="sports">Sports</option>
        <option value="Anime">Anime</option>
        <option value="Fighting">Fighting</option>
        <option value="BattleRoyale">BattleRoyale</option>
        <option value="Racing">Racing</option>
        <option value="MOBA">MOBA</option>
        <option value="Fantasy">Fantasy</option>
        <option value="MMORPG">MMORPG</option>
        <option value="sci-fi">Sci-Fi</option>
      </select>
      {/* Conditional rendering based on loading state */}
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="game-list">
          {/* Mapping over list of games and rendering a game card for each */}
          {games.map((game) => (
            <div className="game-card" key={game.id}>
              <img src={game.thumbnail} alt={game.title} />
              <h3>{game.title}</h3>
              <p>{game.short_description}</p>
              <a href={game.game_url} target="_blank" rel="noopener noreferrer">
                <button>Go Now</button>
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};