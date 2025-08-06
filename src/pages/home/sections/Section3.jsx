import React from "react";
import './Section3.css'
import CardPalestrante from '../../../components/CardPalestrante'
import foto_erika from "../assets/erika.png"
import foto_claudio from "../assets/claudio.png"
import foto_moscatel from "../assets/moscatel.png"
// import Button from "../../../components/Button";

export default function Section3 () {
    return (
        <div className="section-body">
            <div class="titulo">
                <h3>Palestrantes confirmados</h3>
            </div>

            <div className="secao1-cards">
                <CardPalestrante nome={'Moscatel'} tema_palestra={"Paradoxo de Moravec - Complexidade do aprendizado para Ia em tarefas banais"} foto_palestrante={foto_moscatel}/>
                <CardPalestrante nome={'Erika'} tema_palestra={"Construindo um RAG Local com Python e Ollama"} foto_palestrante={foto_erika}/>
                <CardPalestrante nome={'Claudio'} tema_palestra={"Usando Scrapy para obter dados públicos de maneira estruturada"} foto_palestrante={foto_claudio}/>
            </div>
        </div>
    )
}