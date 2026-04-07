import { useState } from "react"
import "./criarGaleria.css"
import { imageInGaleries } from "./AtomsGaleria"
import { useAtom } from "jotai"
import EncapsuladorDeImagens from "./EncapsuladorDeImagens"
import { supabase } from "../../../../../SupabaseClient"

export default function FormularioGaleria() {
    const [ eventName , setEventName ] = useState("")
    const [ eventDescription , setEventDescription ] = useState("")
    const [ allImages , setAllImages] = useAtom(imageInGaleries)

    async function sendNewGalerie(eventName, eventDescription, allImages) {
        const { data, error } = await supabase
                            .from('galerie')
                            .insert([{
                                event_name : eventName,
                                event_description : eventDescription,
                                event_photos : {img_link: allImages}
                            }]);
        setEventName("");
        setEventDescription("");
        setAllImages([]);
        if (error) {
            console.error('Error:', error);
            return
        }
        console.log('Sucess:', data);
    }

    return(
    <div className="FormularioGaleria">
        <h3>Nome do Evento:</h3>
        <input
            type="text"
            value={eventName}
            onChange={(e) => (setEventName(e.target.value))}
        />
        <h3>Descrição do Evento:</h3>
        <input
            type="text"
            value={eventDescription}
            onChange={(e) => (setEventDescription(e.target.value))}
        />
        <EncapsuladorDeImagens/>
        <button onClick={() => (sendNewGalerie(eventName,eventDescription,allImages))}>Enviar</button>
    </div>
    )
}