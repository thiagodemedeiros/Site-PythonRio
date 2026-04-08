import { useState , useEffect } from "react"
import { useAtom } from "jotai"
import { googleIframeAtom , inscriptionFormUrlAtom } from "../../jotai/AtomsInscrevaSe";
import { supabase } from "../../SupabaseClient";

export default function EventData() {
    const [ allData , SetAllData ] = useState("");
    const [ _ , setGoogleIframe ] = useAtom(googleIframeAtom);
    const [ __ , setInscriptionFormUrl ] = useAtom(inscriptionFormUrlAtom);

    async function pegarDadosDoEvento() {
        const { data , error } = await supabase
                                    .from("events")
                                    .select("*")
        if (error) {
            console.error(`error: ${error}`)
            return
        }
        // console.log();
        setInscriptionFormUrl(data[0].inscription_form_url)
        setGoogleIframe(data[0].google_iframe);
    }

    useEffect(() => {
        pegarDadosDoEvento()
    },[])

    return(
    <div>
        
    </div>
    )
}