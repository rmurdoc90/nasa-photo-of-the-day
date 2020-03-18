import React from 'react';
import "./App.css";
import Header from './header';
import Content from './content';


const HeaderContainer = props =>{
    return (
        <div className = 'header-container'> 
            <Header/>
            <Content/>
        </div>
    )
}