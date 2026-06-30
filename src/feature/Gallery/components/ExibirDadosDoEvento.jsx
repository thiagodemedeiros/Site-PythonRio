import { useState , useEffect } from "react"
import "./sections/section1Galeria.css"

export default function ExibirDadosDoEvento({name, description}) {
    return(<div className="ExibirDadosDoEvento">
        <h2>{name}</h2>
        <h2>{description}</h2>
    </div>)
}