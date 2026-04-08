import { useState , useEffect } from "react"
import { useAtom } from "jotai"
import { googleIframeAtom } from "../../jotai/AtomsInscrevaSe";
import { supabase } from "../../SupabaseClient";

export default function EventData() {
    const [ allData , SetAllData ] = useState("");
    const [ googleIframe , setGoogleIframe ] = useAtom(googleIframeAtom);

    async function pegarDadosDoEvento() {
        const { data , error } = await supabase
                                    .from("events")
                                    .select("*")
        if (error) {
            console.error(`error: ${error}`)
            return
        }
        // console.log(data[0].google_iframe);
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