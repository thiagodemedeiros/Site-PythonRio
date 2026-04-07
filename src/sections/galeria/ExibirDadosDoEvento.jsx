import { useState , useEffect } from "react"
import { supabase } from "../../SupabaseClient"
import "../../styles/galeria/section1Galeria.css"

export default function ExibirDadosDoEvento({indexGalerie}) {
    const [ nome , setNome] = useState("Nome do Evento");
    const [ descricao , setDescricao ] = useState("Descrição do Evento");

    async function pegarDadosDoEvento() {
        const { data , error } = await supabase
                                    .from("galerie")
                                    .select("*")
        if (error) {
            console.error(`error: ${error}`)
            return
        }
        setNome(data[indexGalerie].event_name)
        setDescricao(data[indexGalerie].event_description)
    }

    useEffect (() => {
        pegarDadosDoEvento()
    }, [])

    return(<>
        <h2>{nome}</h2>
        <h2>{descricao}</h2>
    </>)
}