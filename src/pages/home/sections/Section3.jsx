import React from "react";
import './Section3.css'
import CardPalestrante from '../../../components/CardPalestrante'
import Button from "../../../components/Button";

export default function Section3 () {
    return (
        <div className="section-body">
            <div class="titulo">
                <h3>Faça sua proposta de palestra</h3>
                <h4>E seja um dos primeiros palestrantes na volta da PythOnRio</h4>
            </div>

            <div className="secao1-cards">
                <a href="https://docs.google.com/forms/d/e/1FAIpQLScAnEA2Eys8AA6pekGwPhMC1xmEAL7dNzsy40QxOK3TdhGbDA/viewform"><Button texto='Envie sua palestra' background='#48517C' backgroundTexto='#FCFCFA' width='270px' height="50px" fontsize="24px" fontWeight='700'/></a>
            </div>
        </div>
    )
}