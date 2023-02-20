import React, { useContext, useEffect, useReducer, useState } from "react";
import axios from "axios";
import { ToggleContainer } from '../App';
import "../styles/GameList.css";
import GameData from "../gamedata/GameData";
import { BsChevronDoubleLeft, BsChevronDoubleRight } from "react-icons/bs";

export default function GameList() {
  const API = "https://free-to-play-games-database.p.rapidapi.com/api/games";
  const [games, setGames] = useState([]);  // State for storing game list
  const [slider, setSlider] = useState(false);  // State for toggling image slider
  const [index, setIndex] = useState(0)  // State for storing the index of the current game
  // eslint-disable-next-line
  const [toggle, setToggle] = useState(false)  // State for toggling game data component
  const Starting = {
      Title: '',
      Thumbnail: '',
      Genre: '',
      Release_Date: '',
      Url: ''
      }
  // Function to show game data and dispatch action to update game data state
  const GameShown = (game) => {
      dispatch({type: 'Click', payload: game})
      setToggle(true)
      console.log(Starting)
  } 
  // Reducer function to update game data state based on the action dispatched
  const reducer = (state, action) => {
      switch (action.type) {
          case 'Click':
              return {
                  Title: Starting.Title = action.payload.title,
                  Thumbnail: Starting.Thumbnail = action.payload.thumbnail,
                  Genre: Starting.Genre = action.payload.genre,
                  Release_Date: Starting.Release_Date = action.payload.release_date,
                  Url: Starting.Url = action.payload.game_url
              }
              default:
                  return state
              }
          }
  // State and dispatch for game data
  const [state, dispatch] = useReducer(reducer, Starting)
  const {themeSwitch} = useContext(ToggleContainer);  // Using context to get current theme state
          
  // API call to get list of games and set the state with the received data
  const gameListApi = async () => {
      const data = await axios.get(API, {
          headers: {
  "X-RapidAPI-Key": "b496d3e7camsh49e1517c464e334p1e37eejsn4692002e4c38",
  "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
  }
});
setGames(data.data);
};
// Effect hook to make API call on component mount
useEffect(() => {
  gameListApi();
}, []);

console.log(games);
// Return JSX to display game list and image slider
  return (
    <>
      <div className="gameList-container">
        {games.length > 0 &&
          games.map((game) => {
            return (
              <div className="Container" key={game.id}>
                <img
                  src={game.thumbnail}
                  alt=""
                  id={slider ? "image-slider" : "images"}
                  onClick={() => GameShown(game)}
                />
                <div className="Title">
                  <h3 className={themeSwitch ? 'light' : null} id={slider ? 'moveTitle' : "Title"} style={game.title.length >= 20 ? {fontSize: '14px' } : {fontSize: '16px'}}>{game.title}</h3>
                  <h4 id={slider ? 'moveTitle' : "Title"} style={themeSwitch ? {color: 'navy'} : {color: 'red'}}>{`${game.genre}`}</h4>
                </div>
              </div>
            );
          })}
      </div>
      <BsChevronDoubleLeft id={slider ? "prev": "DisabledPrev"} fontSize={65} cursor="pointer" onClick={() => setSlider(false) && setIndex(index - 1)} color={themeSwitch ? 'red' : 'white'}/>
      <BsChevronDoubleRight
        id={slider ? "DisableNext": "Next"}
        fontSize={65}
        cursor="pointer"
        onClick={() => setSlider(true) && setIndex(index + 1)}
        color={themeSwitch ? 'red' : 'white'}
      />
      {Starting.Thumbnail ? <GameData Data={Starting} setToggle={setToggle}/> : null}
    </>
  );
}
