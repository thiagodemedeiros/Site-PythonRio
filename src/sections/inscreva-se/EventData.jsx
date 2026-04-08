import { useState , useEffect } from "react"
import { useAtom } from "jotai"
import { googleIframeAtom , inscriptionFormUrlAtom , eventDayAtom , eventHourAtom , eventSponsorLogoUrlImgAtom , eventLocalNameAtom } from "../../jotai/AtomsInscrevaSe";
import { supabase } from "../../SupabaseClient";

export default function EventData() {
    const [ _ , setGoogleIframe ] = useAtom(googleIframeAtom);
    const [ __ , setInscriptionFormUrl ] = useAtom(inscriptionFormUrlAtom);
    const [ ___ , setEventDayAtom ] = useAtom(eventDayAtom);
    const [ ____ , setEventHourAtom ] = useAtom(eventHourAtom);
    const [ _____ , setEventSponsorLogoUrlImgAtom ] = useAtom(eventSponsorLogoUrlImgAtom);
    const [ ______ , setEventLocalNameAtom ] = useAtom(eventLocalNameAtom);

    async function pegarDadosDoEvento() {
        const { data , error } = await supabase
                                    .from("events")
                                    .select("*")
        if (error) {
            console.error(`error: ${error}`)
            return
        }
        console.log(data[0]);
        setEventLocalNameAtom(data[0].event_local_name);
        setEventDayAtom(data[0].day);
        setEventHourAtom(data[0].hour);
        setEventSponsorLogoUrlImgAtom(data[0].sponsor_logo_img_url);
        setInscriptionFormUrl(data[0].inscription_form_url)
        setGoogleIframe(data[0].google_iframe);
    }

    useEffect(() => {
        pegarDadosDoEvento()
    },[])

    return(<></>)
}