import React from "react";
import FotoPalestrante from './assets/Foto Palestrante.png'
import './CardPalestrante.css'

export default function CardPalestrante ({nome,tema_palestra,foto_palestrante = FotoPalestrante}) {
    return (
        <div class="card-palestrante">
            <img src={foto_palestrante} alt="Foto Palestrante"/>
            <div class="card-palestrante-texto">
                <h4>{nome}</h4>
                <p>{tema_palestra}</p>
            </div>                
        </div>
    )
}