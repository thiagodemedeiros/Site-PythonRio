import '../../styles/inscreva-se/Section4InscrevaSe.css'
import { useAtom } from "jotai"
import { inscriptionFormUrlAtom , eventDayAtom , eventHourAtom , eventLocalNameAtom } from "../../jotai/AtomsInscrevaSe";
import { useEffect } from 'react';

export default function Section4InscrevaSe() {
    const [ inscriptionFormUrl , _ ] = useAtom(inscriptionFormUrlAtom);
    const [ eventDay , __ ] = useAtom(eventDayAtom);
    const [ eventHour , ___ ] = useAtom(eventHourAtom);
    const [ eventLocalName , ____ ] = useAtom(eventLocalNameAtom);

    useEffect(() => {
        if (inscriptionFormUrl) {
            console.log("Section4InscrevaSe")
            console.log(inscriptionFormUrl);
            console.log(eventDay);
            console.log(eventHour);
        };
    }, [inscriptionFormUrl]);

    const LinkParaInscricao = inscriptionFormUrl;

    return (<>
        <div className='Section4InscrevaSe_titulo'>
            <h4>Sim!!! O nosso próximo evento já tem data marcada!</h4>
        </div>

        <div className="Section4InscrevaSe">
            <div className='Section4InscrevaSe_texto'>
                <h4>Nesse Dia {eventDay}</h4>
                <h4>Às {eventHour}</h4>
                <h4>Você tem um encontro com a gente!!!</h4>
                <h4>Local : {eventLocalName}</h4>
            </div>
        </div>

        <div className='Section4InscrevaSe_cta'>
            <h4>Inscreva-se agora no nosso próximo evento!</h4>
            <a href={LinkParaInscricao} target="_blank">
                <button>Clique aqui e Inscreva-se</button>
            </a>
            <h4>Mas seja rápido, pois temos vagas limitadas!!!</h4>
        </div>
    </>)
}