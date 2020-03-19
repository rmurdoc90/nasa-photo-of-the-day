import React from 'react';
import "../App.css";
import styled from "styled-components";


const HeaderStyle = styled.div`
    background: #2F3C7E;
    color: white;
    width:500px;
    height:80px;
    text-align:center;
    border-radius:2%;
    display:flex;
    align-items:center;
    justify-content:center;
    

`;

const H1Styled = styled.h1`
    font-size: 40px;
    font-family: 'Cedarville Cursive', cursive;


`;

const Header = props => {
    return (
       <HeaderStyle>
            <H1Styled>{props.name}</H1Styled>
        </HeaderStyle> 
    )
   
}

export default Header;

