import React from "react";
import { Link } from "react-router-dom";
import logo from "../icons/logo.png"
import Dropdown from "./dropdown";

const Navbar=()=> {    
return <div className="navbar">
    <Link to="/#home" className="logoname">
        <img src={logo} alt="logo"></img>
    </Link>
    <Link to="/#help" className="linked">ПОСЛУГИ</Link>
    <Link to="/#about" className="linked">ПРО НАС</Link>
    <Link to="/#vidguk" className="linked">ВІДГУКИ</Link>
    <Link to="/#case" className="linked">КЕЙСИ</Link>
    <Link to="/#contacts" className="linked">КОНТАКТИ</Link>
    <Dropdown></Dropdown>
        </div>
}
export default Navbar