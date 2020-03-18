import React from 'react';
import "../App.css";

const Header = props => {
    return (
       <div className ='header-title'>
            <h1>{props.name}</h1>
        </div> 
    )
   
}

export default Header;

