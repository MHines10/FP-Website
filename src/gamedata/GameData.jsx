import React, { useContext } from 'react'
import '../styles/GameData.css'
import { ToggleContainer } from '../App';
import { IoCloseSharp } from 'react-icons/io5';
import { IoLogoGameControllerB } from 'react-icons/io'

export default function GameData({Data, setToggle}) {
    const{themeSwitch} = useContext(ToggleContainer);
  return (
    <>
        <div className={themeSwitch ? "Background-light" : "Background"}>
        <div className='Game-Container'>
            <img src={Data.Thumbnail} alt="" id='gameDataImg' />
            <div className='Game-Info'>
                <IoCloseSharp color="#fff" fontSize={30} cursor="pointer" id='Close' onClick={() => setToggle(false)} style={themeSwitch ? {color: 'navy'} : null}/>
                <h1 id={themeSwitch ? 'GameTitlecolor' : 'GameTitle'} style={themeSwitch ? {color: 'white'} : null}>{Data.Title}</h1>
                <h3 style={themeSwitch ? {color: 'white'} : null}>Genre: {Data.Genre}</h3>
                <h3 style={themeSwitch ? {color: 'white'} : null}>Release Date: {Data.Release_Date}</h3>
                <a className='playnow-btn' href={Data.Url}><span id=''>Play Now <IoLogoGameControllerB fontSize={30} id='gamepad'/></span></a>
            </div>
        </div>
        </div>
    </>
  )
}
