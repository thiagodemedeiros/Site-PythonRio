import { useState } from "react"
import FormularioGaleria from "./addGalerie/FormularioGaleria"
import AdicionarEvento from "./addEvent/AdicionarEvento"
import "./selectForm.css"

export default function SelectForm() {
    const [ formSelected  , setFormSelected ] = useState("")
    let form;

    switch (formSelected) {
        case "addGalerie":
            form = <FormularioGaleria/>;
            break
        case "addEvent":
            form = <AdicionarEvento/>;
            break
    }

    return(
    <>
        <div className="SelectForm">
            <h2>Selecione o Formulário:</h2>
            <select
                value={formSelected}
                onChange={(e) => setFormSelected(e.target.value)}
            >
                <option value="">Selecione</option>
                <option value="addGalerie">Adicionar Galeria</option>
                <option value="addEvent">Adicionar Evento</option>
            </select>
        </div>
        {form}
    </>
    )
}