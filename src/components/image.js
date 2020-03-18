import React, {useState ,useEffect } from "react";
import axios from 'axios';
import Header from './header';
import Content from './content';
import "../App.css";


function ImageKey(){
  const [photo, setPhoto] = useState([]);
  
  useEffect(()=>{
    axios
    .get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
    .then(response =>{
    console.log(response.data);
      setPhoto(response.data);
    })
    .catch(error => {
      console.log('Error:', error)
    })
  }, [])
  return (
      <div>
        <Header name={photo.copyright}/>
      <img className='main-image' alt='space-photo' src={photo.url}/>
      <Content content={photo.explanation}/>
      </div>
  )
}

export default ImageKey;