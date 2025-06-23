import React from "react";
import './Section3.css'
import CardPalestrante from '../../../components/CardPalestrante'

export default function Section3 () {
    return (
        <div className="section-body">
            <div class="titulo">
                <h3>Conheça nossos palestrantes</h3>
            </div>

            <div className="secao1-cards">
                <CardPalestrante/>
                <CardPalestrante/>
                <CardPalestrante/>
                <CardPalestrante/>
                <CardPalestrante/>
            </div>
        </div>
    )
}