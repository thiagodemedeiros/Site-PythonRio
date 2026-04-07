import { useState , useEffect } from "react"
import AddSpeaker from "./AddSpeaker";
import "./adicionarEvento.css"

export default function AdicionarEvento() {
    const [ logoImageUrl , setLogoImageUrl ] = useState("");
    const [ iframe , setIframe ] = useState("");
    const [ date , setDate ] = useState("");
    const [ hour , setHour ] = useState("");
    const [ inscritionFormUrl , setInscritionFormUrl ] = useState("");
    

    const extrairIframe = (iframe) => {
        const startTag = iframe.indexOf('src="');
        const endTag = iframe.indexOf('"');
        if (startTag !== -1 && endTag !== -1) {
            const resultado = texto.substring(inicio + 1, fim);
            setIframe(resultado);
        }
    }

    const allData = () => {
        console.log(logoImageUrl);
        console.log(iframe);
        console.log(date);
        console.log(hour);
        console.log(inscritionFormUrl);
        console.log(speakerName);
        console.log(talkTitle);
        console.log(talkDescription);
        console.log(speakerPhotoUrl);
        console.log(github);
        console.log(githubUrl);
        console.log(instagram);
        console.log(instagramUrl);
        console.log(linkdin);
        console.log(linkdinUrl);
    };

    useEffect(() => {
        console.log(iframe)
        console.log(logoImageUrl)
    },[logoImageUrl,iframe])

    return(
    <div>
        <AddSpeaker/>

        <h3>Digite a url da Imagem com a Logo:</h3>
        <input type="text" onChange={(e) => setLogoImageUrl(e.target.value)} value={logoImageUrl}/>

        <h3>Cole a url do Iframe do google:</h3>
        <input type="text" onChange={(e) => setIframe(e.target.value)} value={iframe}/>

        <h3>Digite a data:</h3>
        <input type="text" onChange={(e) => setDate(e.target.value)} value={date}/>

        <h3>Digite a hora:</h3>
        <input type="text" onChange={(e) => setHour(e.target.value)} value={hour}/>

        <h3>Digite o link para o formulário de inscrição:</h3>
        <input type="text" onChange={(e) => setInscritionFormUrl(e.target.value)} value={inscritionFormUrl}/>
    </div>
    )
}