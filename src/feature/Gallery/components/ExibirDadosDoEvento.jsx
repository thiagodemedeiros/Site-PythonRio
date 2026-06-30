import { useState , useEffect } from "react"
import "./sections/section1Galeria.css"

export default function ExibirDadosDoEvento({indexGalerie}) {
    const [ nome , setNome] = useState("Nome do Evento");
    const [ descricao , setDescricao ] = useState("Descrição do Evento");

    return(<div className="ExibirDadosDoEvento">
        <h2>{nome}</h2>
        <h2>{descricao}</h2>
    </div>)
}