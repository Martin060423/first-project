import React from "react";
import logoImg from './logo.png'
import { Link } from "react-router-dom";
import './Header.css'
import Search from "./search";

class Header extends React.Component{
    
    render(){
        return (
            <div className="Header">
                <Link to={'/'}>
                <img className="Header-logo" src={logoImg}/>                
                </Link>
                <Search/>
            </div>
        )
    }
}

export default Header
