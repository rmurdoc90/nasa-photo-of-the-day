import React from 'react';
import "./App.css";

const Header = props => {
    return (
       <div className ='header-title'>
            <h1>{props.copyright}</h1>
        </div> 
    )
}

export default Header;

