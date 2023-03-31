import React from 'react'
import './Card.css'
import { useState } from 'react';

import {toast} from "react-toastify";



export const Card = (props) => {
    let data=props.data;
    const [description,setDescription]= useState(data.description.slice(0,150));
    const toastHandler = () => {
        toast("Wow so easy!");
    }
    
  return (
    <div class="card">
    <div className="image">
        <img src={data.image.url} alt="Card Image" class="card-image"></img>
        <div className="button">
            <button onClick={toastHandler}>click</button>
        </div>
 </div>
  <div class="card-content">
    <h2 class="card-title">{data.title}</h2>
    <p class="card-text">{description}.....</p>
    {/* <button class="card-button">Learn More</button> */}
  </div>
</div>

  )
}
