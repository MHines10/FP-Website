import React, { useContext } from 'react';
import '../styles/Main.css';
import { ToggleContainer } from  '../App';
import GameList from "../gamedata/GameList";
import GameSearch from "../gamedata/GameSearch";
import MaleCharacter from '../images/gameCharater-transformed.png'
import FemaleCharacter from '../images/femalechar-removebg.png'
import ZeroCost from '../images/ZERO-removebg.png'

export default function Main(props) {
    const {themeSwitch} = useContext(ToggleContainer);
    
  return (
      <>
        <div className='container'>
          <div className={themeSwitch ? "Bg-Container-light" : 'Bg-Container-dark'}>
          </div>
          <div className="zero-logo">
              <img src={themeSwitch ? ZeroCost : ZeroCost } alt='' id={themeSwitch ? 'Zero-Logo' : 'Zero-Logo' }/>
          </div>
          <div className='gamechar'>
              <img src={themeSwitch ? FemaleCharacter : MaleCharacter } alt='' id={themeSwitch ? 'Female' : 'Male' }/>
          </div>
        </div>
        <h3 id="heading" className="heading" style={themeSwitch ? { color: "red" } : { color: "white" }}>PlayFree</h3>
        <GameList/>
        <br />
        <h3 id="heading" className="heading" style={themeSwitch ? { color: "red" } : { color: "white" }}>Game Search</h3>
        <GameSearch/>
      </>
  )
}
