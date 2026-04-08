import '../../styles/inscreva-se/Section4InscrevaSe.css'
import { useAtom } from "jotai"
import { inscriptionFormUrlAtom } from "../../jotai/AtomsInscrevaSe";
import { useEffect } from 'react';

export default function Section4InscrevaSe() {
    const [ inscriptionFormUrl , _ ] = useAtom(inscriptionFormUrlAtom);

    useEffect(() => {
        if (inscriptionFormUrl) {
            console.log("formulario")
            console.log(inscriptionFormUrl);
        };
    }, [inscriptionFormUrl]);

    const LinkParaInscricao = inscriptionFormUrl;

    return (<>
        <div className='Section4InscrevaSe_titulo'>
            <h4>Sim!!! O nosso próximo evento já tem data marcada!</h4>
        </div>

        <div className="Section4InscrevaSe">
            <div className='Section4InscrevaSe_texto'>
                <h4>Nesse Dia 11 de Abril (Sábado)</h4>
                <h4>Às 14:00</h4>
                <h4>Você tem um encontro com a gente na Nave do Conhecimento - Engenhão <a href='https://www.instagram.com/naveengenhao/'>(@naveengenhao)</a></h4>
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