import '../../styles/inscreva-se/Section3InscrevaSe.css'
import { useAtom } from "jotai"
import { googleIframeAtom } from "../../jotai/AtomsInscrevaSe";
import { useEffect } from 'react';

export default function Section3InscrevaSe() {
    const [ googleIframe , setGoogleIframe ] = useAtom(googleIframeAtom);

    const extrairIframe = (iframe) => {
        if (!iframe.includes("width")){
            // console.log("sem src");
            setGoogleIframe(iframe);
            return;
        }
        const startTag = iframe.indexOf('src="');
        const endTag = iframe.indexOf('" width');
        if (startTag !== -1 && endTag !== -1) {
            const resultado = iframe.substring(startTag + 5, endTag);
            setGoogleIframe(resultado);
            // console.log(resultado)
        }
    }

    useEffect(() => {
        if (googleIframe) {
            //console.log("Section3InscrevaSe")
            //console.log(googleIframe)
            extrairIframe(googleIframe);
            //console.log("extrairIframe(googleIframe);")
            //console.log(googleIframe)
        }
    }, [googleIframe]);

    return (
        <div className="Section3InscrevaSe">
            <div className='Section3InscrevaSe_titulo'>
                <h3>Localizado no:</h3>
            </div>

            <iframe className='Section3InscrevaSe_mapa'
                src={googleIframe}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
    )
}