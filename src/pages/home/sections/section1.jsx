import React from "react";
import './section1.css';
import Logo from "../assets/logo.png";
import Button from "../../../components/Button";

export default function Section1 () {
    return (
        <div className="section">
            <div className="logo-inscreva">
                <img src={Logo} alt="Logo PythonRio" className="logo1"/>
                <Button texto='INSCREVA-SE' background='#48517C' backgroundTexto='#FCFCFA' width='230px' height="50px" fontsize="24px"/>
            </div>

            <div className="botoes">
                <Button texto='Sobre' background='#FCFCFA' backgroundTexto='#48517C' height="40px"/>
                <Button texto='Palestrantes' background='#FCFCFA' backgroundTexto='#48517C' height="40px"/>
                <Button texto='Programação' background='#FCFCFA' backgroundTexto='#48517C' height="40px"/>
                
            </div>
        </div>
    )
}