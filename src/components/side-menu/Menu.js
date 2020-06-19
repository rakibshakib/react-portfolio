import React, { useState } from 'react'
import './Menu.css'
import mypic from '../../img/mypic.jpg';
import {
    NavLink
} from "react-router-dom";
import { Switch } from 'antd';



const Menu = () => {
    const [toggle, setToggle] = useState(true);
    const toggler = () => {
        toggle ? setToggle(false) : setToggle(true);
    }
    return (
        <>
            <div className={toggle ? "side-menu" : "side-menu2"}>
                <div className="side-menu-btn">
                    <Switch onClick={toggler} />
                </div>
                <div className="side-img">
                    <img className={toggle ? " img" : " img2"} src={mypic} alt="" />
                </div>
                <hr style={{ borderBottom: "3px solid  #2e344e", marginTop: "115px" }} />
                <div className={toggle ? "menu-items" : "menu-items2"}>
                    <NavLink to="/"></NavLink>
                    <NavLink activeClassName="active" className="navs-link" to="/home">Home </NavLink>
                    <NavLink activeClassName="active" className="navs-link" to="/about">About </NavLink>
                    <NavLink activeClassName="active" className="navs-link" to="/service">Service </NavLink>
                    <NavLink activeClassName="active" className="navs-link" to="/works">Works </NavLink>
                    <NavLink activeClassName="active" className="navs-link" to="/contact">Contact </NavLink>
                </div>
            </div>

        </>
    )
}

export default Menu;