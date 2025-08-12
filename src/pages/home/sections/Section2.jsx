import React from "react";
import './Section2.css'
import Image1 from '../assets/image1.png'
import Image2 from '../assets/image2.png'

export default function Section2 () {
    return (
        <div className="Section2">
            <div className="texto1-h1">
                <h1>A PythOnRio está de volta</h1>
            </div>

            <div className="texto1">
                <img src={Image1} alt="Comunidade PythOnRio reunida em evento no Rio de Janeiro" />
                <div className="texto1-h3">
                    <h3>Após anos de pausa, a comunidade Python do Rio de Janeiro tem motivos para comemorar: a PythOnRio está de volta!</h3>
                    <h3>Mais do que um evento de tecnologia, a PythOnRio é um ponto de encontro entre programadores, entusiastas, estudantes, educadores, empresas e curiosos que acreditam no poder do código para transformar o mundo.</h3>
                </div>
            </div>
            <div className="texto2">
                <img src={Image2} alt="Comunidade PythOnRio esta de volta" />
                <div className="texto2-h3">
                    <h3>Neste novo capítulo, queremos valorizar ainda mais a diversidade, a colaboração e a criatividade que marcam o espírito da linguagem Python — com a cara e a energia do Rio! Prepare-se para uma programação vibrante com palestras, oficinas, painéis, espaço para projetos abertos, momentos de networking e experiências únicas.</h3>
                    <h3>Se você já participou antes, sabe o quanto esse encontro é especial. E se é sua primeira vez, venha descobrir por que a PythOnRio é muito mais do que um evento — é uma celebração da nossa comunidade.</h3>
                </div>
            </div>
        </div>
    )
}