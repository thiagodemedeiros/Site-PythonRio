import React from "react";
import './section1.css';
import Logo from "../assets/logo.png";
import Button from "../../../components/Button";

export default function Section1 () {
    return (
        <div className="section">
            <div className="logo-inscreva">
                <img src={Logo} alt="Logo PythonRio" className="logo1"/>
                <div className="button1">
                    <a href="/inscreva"><Button texto='INSCREVA-SE' background='#48517C' backgroundTexto='#FCFCFA' width='230px' height="50px" fontsize="24px"/></a>
                </div>
            </div>

            <div className="botoes">
                <a href="/sobre"><Button texto='Sobre' background='#FCFCFA' backgroundTexto='#48517C' height="40px"/></a>
                <a href="/palestrantes"><Button texto='Palestrantes' background='#FCFCFA' backgroundTexto='#48517C' height="40px"/></a>
                <a href="/programacao"><Button texto='Programação' background='#FCFCFA' backgroundTexto='#48517C' height="40px"/></a>
            </div>
        </div>
    )
}