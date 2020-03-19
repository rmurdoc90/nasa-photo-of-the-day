import React, {useState ,useEffect } from "react";
import axios from 'axios';
import Header from './header';
import Content from './content';
import "../App.css";
import styled from "styled-components";

const SpacePhoto = styled.img`
    width:425px;
    height:auto;
    border-radius : 2%;
    margin-top: 3%
    
`;
const Card = styled.div`
    width:500px;
    height:auto;
    background: #FBEAEB;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    padding: 0% 5% 2% 5%;
    border-radius:1%
`;

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
    
      <Card>
        <Header name={photo.copyright}/>
      <SpacePhoto alt='space-photo' src={photo.url}/>
      <Content content={photo.explanation}/>
      </Card>
  )
}

export default ImageKey;