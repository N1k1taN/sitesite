import React from "react";
import { Link } from "react-router-dom";
import logo from "../icons/logo.png"
import Dropdown from "./dropdown";

const Navbar=()=> {    
return <div className="navbar">
    <Link to="/#1" className="logoname">
        <img src={logo} alt="logo"></img>
    </Link>
    <Link to="/#2" className="linked">ПОСЛУГИ</Link>
    <Link to="/#3" className="linked">ПРО НАС</Link>
    <Link to="/#6" className="linked">КЕЙСИ</Link>
    <Link to="/#5" className="linked">КОНТАКТИ</Link>
    <Dropdown></Dropdown>
        </div>
}
export default Navbar