import React from 'react';
import "../App.css";
import styled from "styled-components";

const StyledContent = styled.p`
    font-family: 'Raleway', sans-serif;
    background:white;
    font-size:20px
    font-weight:500;
    width: 450px;
    padding:2%;
    border-radius: 2%;
`;



 const Content = props =>{
     return (
     <StyledContent>{props.content}</StyledContent>
     
     )
 }
 export default Content;