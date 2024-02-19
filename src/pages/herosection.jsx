import React from 'react';
import wave from '../assets/image/wave.png';
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

export default function Herosection() {
  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '20px 100px',
    
  };
  return (
    <section id="heroSection" className="hero--section sections">
    <div className='hero-card ' style={containerStyle}>
    <div className="hero-inner">
    <div className='hero-frontend'>
   <h1>Front-End Developer </h1> 
   <img src={wave} alt="hello" />
   <p>Hi, I am Sumit Shrestha. A passionate Front-End React Developer based in Kathmandu, Nepal.</p>
   <div className='logo-font'>
   <BsLinkedin /><FaGithub />

   </div>

    </div>

    
      
		<div class="shape-img">
  		<div class="shape"></div>
		</div>
    </div>
    </div>


    </section>
  )
}



