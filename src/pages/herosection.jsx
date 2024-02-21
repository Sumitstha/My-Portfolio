import React from 'react';
import wave from '../assets/image/wave.png';
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import '../assets/image/wave.png'

export default function Herosection() {
 
  return (
    <section id="heroSection" className="hero--section sections">
    
    <div className='hero-frontend'>
    
   <h1>Front-End Developer <span> <img src={wave} alt="hello" /></span></h1> 
  
   <p>Hi, I am <b>Sumit Shrestha</b>. A passionate Front-End React Developer based in Kathmandu, Nepal.</p>
  <div className='fontawe'><BsLinkedin /><FaGithub /></div>
   
    </div>

		<div class="shape-img">
  		<div class="shape"></div>
		</div>
    {/* <div className="hero--section--img">
        <img src={wave} alt="Hero Section" />
      </div> */}
    </section>
  )
}



