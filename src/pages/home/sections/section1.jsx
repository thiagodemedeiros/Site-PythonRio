import React from "react";
import './section1.css';
import Logo from "../assets/logo.png";

export default function Section1 () {
    return (
        <div className="section">
            <img src={Logo} alt="Logo PythonRio" className="logo1"/>
        </div>
    )
}