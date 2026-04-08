import { useState , useEffect } from "react"
import { useAtom } from "jotai";
import { speakersListAtom } from "./AtomsEventForms";
import { supabase } from "../../../../../SupabaseClient";
import dayjs from "dayjs";
import "./adicionarEvento.css"

export default function AddEvent() {
    const now = dayjs();
    const [ logoImageUrl , setLogoImageUrl ] = useState("");
    const [ iframe , setIframe ] = useState("");
    const [ date , setDate ] = useState("");
    const [ hour , setHour ] = useState("");
    const [ inscriptionFormUrl , setInscriptionFormUrl ] = useState("");
    const [ speakersList , setSpeakersList] = useAtom(speakersListAtom);

    useEffect(() => {
        setDate(now.format('YYYY-MM-DD'));
    }, []);

    // useEffect(() => {
        // console.log("DATA")
        // console.log(date)
    // }, [date]);

    const resetAllStatesBeforeSendToSupabase = () => {
        setLogoImageUrl("");
        setIframe("");
        setDate("");
        setHour("");
        setInscriptionFormUrl("");
        setSpeakersList("");
    };

    async function sendNewGalerie(eventName, eventDescription, allImages) {
        extrairIframe(iframe);
        const { data, error } = await supabase
                            .from('events')
                            .insert([{
                                sponsor_logo_img_url : logoImageUrl,
                                google_iframe : iframe,
                                day : date,
                                hour : hour,
                                inscription_form_url : inscriptionFormUrl,
                                speakers : speakersList,
                            }]);
        if (error) {
            console.error('Error:', error);
            return
        }
        console.log('Sucess:', data);
        allData()
        resetAllStatesBeforeSendToSupabase();
    }

    const extrairIframe = (iframe) => {
        const startTag = iframe.indexOf('src="');
        const endTag = iframe.indexOf('" width');
        if (startTag !== -1 && endTag !== -1) {
            const resultado = iframe.substring(startTag + 5, endTag);
            setIframe(resultado);
        }
    }

    const allData = () => {
        console.log("ALLDATA")
        console.log(logoImageUrl);
        console.log(iframe);
        console.log(date);
        console.log(hour);
        console.log(inscriptionFormUrl);
        console.log(speakersList);
    };

    // useEffect(() => {
        // console.log("Testando iframe");
        // console.log(iframe);
        // extrairIframe(iframe);
        // console.log(iframe)
    // },[iframe])

    return(
    <div className="AddSpeaker">
        <h2>Informações do evento:</h2>
        <div className="AddSpeaker_input_div">
            <div className="AddSpeaker_input">
                <h3>Digite a url da Imagem com a Logo:</h3>
                <input type="text" onChange={(e) => setLogoImageUrl(e.target.value)} value={logoImageUrl}/>
            </div>
            <div className="AddSpeaker_input">
                <h3>Cole a url do Iframe do google:</h3>
                <input type="text" onChange={(e) => setIframe(e.target.value)} value={iframe}/>
            </div>
            {/* MODIFICAR A DATA PARA MELHOR MANIPULAÇÃO NO BANCO */}
            <div className="AddSpeaker_input">
                <h3>Digite a data:</h3>
                <input type="date" onChange={(e) => setDate(e.target.value)} value={date}/>
            </div>
            <div className="AddSpeaker_input">
                <h3>Digite a hora:</h3>
                <input type="text" onChange={(e) => setHour(e.target.value)} value={hour}/>
            </div>
            <div className="AddSpeaker_input">
                <h3>Digite o link para o formulário de inscrição:</h3>
                <input type="text" onChange={(e) => setInscriptionFormUrl(e.target.value)} value={inscriptionFormUrl}/>
            </div>
        </div>
        <button onClick={() => sendNewGalerie()}>
            Criar Evento
        </button>
    </div>
    )
}