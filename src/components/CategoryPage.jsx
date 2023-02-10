import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/CategoryPage.css'

export default function CategoryPage() {
  const [games, setGames] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('shooter');
  const [loading, setLoading] = useState(false);

  const fetchGames = async (category) => {
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
      const response = await axios.request(options);
      setGames(response.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchGames(selectedCategory);
  }, [selectedCategory]);

  return (
    <div>
      <h2 >Games List</h2>
      <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
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
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="game-list">
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