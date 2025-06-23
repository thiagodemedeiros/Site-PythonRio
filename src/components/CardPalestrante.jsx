import React from "react";
import FotoPalestrante from './assets/Foto Palestrante.png'
import './CardPalestrante.css'

export default function CardPalestrante () {
    return (
        <div class="card-palestrante">
            <img src={FotoPalestrante} alt="Foto Palestrante"/>
            <div class="card-palestrante-texto">
                <h4>Gato Doidão</h4>
                <p>Veio para ensinar doidice aos doidois que querem aprender doidicies</p>
            </div>                
        </div>
    )
}