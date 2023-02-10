import React from 'react'
import gametrailer from '../images/gametrailerhome.mp4'
import '../styles/Welcome.css'

export default function Welcome() {
  return (
    <div className='hero-welcome'>
        <video src={gametrailer} autoPlay loop muted/>
    </div>
  )
}
