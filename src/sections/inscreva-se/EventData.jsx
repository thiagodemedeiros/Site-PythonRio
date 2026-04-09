import { useState , useEffect } from "react"
import { useAtom } from "jotai"
import { googleIframeAtom , inscriptionFormUrlAtom , eventDayAtom , eventHourAtom , eventSponsorLogoUrlImgAtom , eventLocalNameAtom } from "../../jotai/AtomsInscrevaSe";
import { supabase } from "../../SupabaseClient";
import dayjs from "dayjs";

export default function EventData() {
    const [ _ , setGoogleIframe ] = useAtom(googleIframeAtom);
    const [ __ , setInscriptionFormUrl ] = useAtom(inscriptionFormUrlAtom);
    const [ ___ , setEventDayAtom ] = useAtom(eventDayAtom);
    const [ ____ , setEventHourAtom ] = useAtom(eventHourAtom);
    const [ _____ , setEventSponsorLogoUrlImgAtom ] = useAtom(eventSponsorLogoUrlImgAtom);
    const [ ______ , setEventLocalNameAtom ] = useAtom(eventLocalNameAtom);
    const today = dayjs();

    async function pegarDadosDoEvento() {
        let indexData;
        const { data , error } = await supabase
                                    .from("events")
                                    .select("*")
        if (error) {
            console.error(`error: ${error}`)
            return
        }
        console.log("TESTE")
        data.find((d, index) => {
            if (today.isBefore(dayjs(d.day))) {
                indexData = index;
                return true
            }
        });
        console.log(indexData)
        console.log(data);
        console.log("TESTE")
        console.log(data[indexData]);
        setEventLocalNameAtom(data[indexData].event_local_name);
        setEventDayAtom(data[indexData].day);
        setEventHourAtom(data[indexData].hour);
        setEventSponsorLogoUrlImgAtom(data[indexData].sponsor_logo_img_url);
        setInscriptionFormUrl(data[indexData].inscription_form_url)
        setGoogleIframe(data[indexData].google_iframe);
    }

    useEffect(() => {
        pegarDadosDoEvento()
    },[])

    return(<></>)
}