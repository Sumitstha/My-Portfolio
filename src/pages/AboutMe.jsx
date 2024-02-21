import React from 'react'
import laptop from '../assets/image/laptop.jpg'

export default function AboutMe(){
  return (
    <section className='about-section'>
    <h3 className='my-title about-center-text'>About me</h3>
    <div className='about-me-box'>
        <div className='about-image'>
            <img src={laptop} alt="" />
        </div>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit nihil corporis amet labore velit quasi omnis, quis et, aspernatur voluptatum fuga porro ea tempore voluptates laboriosam, delectus numquam beatae magnam.</p>
        </div>
    </section>
  )
}
