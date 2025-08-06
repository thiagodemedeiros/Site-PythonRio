import React from "react";
import './Section3.css'
import CardPalestrante from '../../../components/CardPalestrante'
import foto_erika from "../assets/erika.png"
import foto_claudio from "../assets/claudio.png"
import foto_moscatel from "../assets/moscatel.png"
// import Button from "../../../components/Button";

const speakers = [
  {
    id: 1,
    nome: "Moscatel",
    palestra: "Paradoxo de Moravec - Complexidade do aprendizado para Ia em tarefas banais",
    foto: foto_moscatel
  },
  {
    id: 2,
    nome: "Erika",
    palestra: "Construindo um RAG Local com Python e Ollama",
    foto: foto_erika
  },
  {
    id: 3,
    nome: "Claudio",
    palestra: "Usando Scrapy para obter dados públicos de maneira estruturada",
    foto: foto_claudio
  }
];

export default function Section3 () {
    return (
        <div className="section-body">
            <div class="titulo">
                <h3>Palestrantes confirmados</h3>
            </div>

            {/* <div className="secao1-cards">
                <CardPalestrante nome={'Moscatel'} tema_palestra={"Paradoxo de Moravec - Complexidade do aprendizado para Ia em tarefas banais"} foto_palestrante={foto_moscatel}/>
                <CardPalestrante nome={'Erika'} tema_palestra={"Construindo um RAG Local com Python e Ollama"} foto_palestrante={foto_erika}/>
                <CardPalestrante nome={'Claudio'} tema_palestra={"Usando Scrapy para obter dados públicos de maneira estruturada"} foto_palestrante={foto_claudio}/>
            </div> */}

            <div className="secao1-cards">
                {speakers.map((speaker) => (
                    <a href={`/sobrepalestrante/${speaker.id}`}>
                        <CardPalestrante nome={speaker.nome} tema_palestra={speaker.palestra} foto_palestrante={speaker.foto}/>
                    </a>
                ))}
            </div>
        </div>
    )
}