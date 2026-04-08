import { useState , useEffect } from "react"
import { useAtom } from "jotai"
import { googleIframeAtom , inscriptionFormUrlAtom , eventDayAtom , eventHourAtom , eventSponsorLogoUrlImgAtom } from "../../jotai/AtomsInscrevaSe";
import { supabase } from "../../SupabaseClient";

export default function EventData() {
    const [ _ , setGoogleIframe ] = useAtom(googleIframeAtom);
    const [ __ , setInscriptionFormUrl ] = useAtom(inscriptionFormUrlAtom);
    const [ ___ , setEventDayAtom ] = useAtom(eventDayAtom);
    const [ ____ , setEventHourAtom ] = useAtom(eventHourAtom);
    const [ _____ , setEventSponsorLogoUrlImgAtom ] = useAtom(eventSponsorLogoUrlImgAtom);

    async function pegarDadosDoEvento() {
        const { data , error } = await supabase
                                    .from("events")
                                    .select("*")
        if (error) {
            console.error(`error: ${error}`)
            return
        }
        console.log(data[1]);
        setEventDayAtom(data[1].day);
        setEventHourAtom(data[1].hour);
        setEventSponsorLogoUrlImgAtom(data[1].sponsor_logo_img_url);
        setInscriptionFormUrl(data[1].inscription_form_url)
        setGoogleIframe(data[1].google_iframe);
    }

    useEffect(() => {
        pegarDadosDoEvento()
    },[])

    return(<></>)
}