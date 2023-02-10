import React, { useContext, useEffect, useReducer, useState } from "react";
import axios from "axios";
import { ToggleContainer } from '../App';
import "../styles/GameList.css";
import GameData from "../gamedata/GameData";
import { BsChevronDoubleLeft, BsChevronDoubleRight } from "react-icons/bs";

export default function GameList() {
    const API = "https://free-to-play-games-database.p.rapidapi.com/api/games";
    const [games, setGames] = useState([]);
    const [slider, setSlider] = useState(false);
    const [index, setIndex] = useState(0)
    // eslint-disable-next-line
    const [toggle, setToggle] = useState(false)
    const Starting = {
        Title: '',
        Thumbnail: '',
        Genre: '',
        Release_Date: '',
        Url: ''
        }
    const GameShown = (game) => {
        dispatch({type: 'Click', payload: game})
        setToggle(true)
        console.log(Starting)
    } 
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
             // eslint-disable-next-line
            const [state, dispatch] = useReducer(reducer, Starting)
            const {themeSwitch} = useContext(ToggleContainer);
            
            const gameListApi = async () => {
                const data = await axios.get(API, {
                    headers: {
        "X-RapidAPI-Key": "b496d3e7camsh49e1517c464e334p1e37eejsn4692002e4c38",
        "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
        }
    });
    setGames(data.data);
  };
  useEffect(() => {
    gameListApi();
  }, []);

  console.log(games);
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
