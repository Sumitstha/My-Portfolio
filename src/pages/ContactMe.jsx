// import CardContactme from '../components/CardContactme';
import React from 'react';
import html from '../assets/image/html.png';
import css from '../assets/image/css.png';

const cardData=[
    {
        "id":1,
        "src":"html",
        "title":"HTML"

    },
    {
        "id":2,
        "src":"css",
        "title":"CSS"

    }
];


export default function ContactMe(){
 return(
    <section className="section-contact">
    <h3 className='my-title all-center-text'>Contact Me</h3>
    <div className=" card-outer">
    {cardData?.map((item,index)=>(
    <div key={index} className="card ">
              <div className="card-head">
                 <div className="text-center card-middle">
                 <div className="logo-contact">
                 <img src={item.src} alt="html" />
                 </div>
                
           <h5 >{item.title}</h5>
                  </div>
              </div>
                  
                     
         
          </div>
    ))}
        </div>
    </section>
 )
};
