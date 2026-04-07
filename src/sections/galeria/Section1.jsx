import ExibidorDeFotos from "./ExibidorDeFotos"
import ExibirDadosDoEvento from "./ExibirDadosDoEvento"
import { useEffect , useState } from "react"
import { supabase } from "../../SupabaseClient"
import "../../styles/galeria/section1Galeria.css"

export default function Section1Galeria() {
    const [ allDataGaleries , setAllDataGaleries] = useState(null)

    async function pegarDadosDasGalerias() {
        const { data , error } = await supabase
                                    .from("galerie")
                                    .select("*")
        if (error) {
            console.error(`error: ${error}`)
            return
        }
        setAllDataGaleries(data)
    }

    useEffect(() => {
        if (!allDataGaleries)
            pegarDadosDasGalerias()
            console.log(allDataGaleries)
    }, [])

    return(<div className="Section1Galeria">
        {allDataGaleries && allDataGaleries.map((_ , index) => (
            <>
                <h1>NOVA GALERIA</h1>
                <ExibirDadosDoEvento indexGalerie={index}/>
                <ExibidorDeFotos indexGalerie={index}/>
            </>
        ))}
    </div>)
}