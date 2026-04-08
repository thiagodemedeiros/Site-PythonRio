import "../styles/components/cta.css"
import { useAtom } from "jotai"
import { useEffect } from 'react';
import { inscriptionFormUrlAtom } from "../jotai/AtomsInscrevaSe";

export default function Cta() {
    const [ inscriptionFormUrl , _ ] = useAtom(inscriptionFormUrlAtom);
    
        useEffect(() => {
            if (inscriptionFormUrl) {
                // console.log("formulario-cta")
                console.log(inscriptionFormUrl);
            };
        }, [inscriptionFormUrl]);
    
        const LinkParaInscricao = inscriptionFormUrl;
    
    return (
        <>
            <div className="cta">
                <h4>O nosso próximo evento já tem data marcada!</h4>
                <a href={LinkParaInscricao} target="_blank">
                    <button>INSCREVA-SE NO NOSSO PRÓXIMO EVENTO</button>
                </a>
            </div>
        </>
    )
}