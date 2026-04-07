import { useState } from "react";

export default function AddSpeaker() {
    // INFORMAÇÕES DO PALESTRANTE OBRIGATÓRIAS
    const [ speakerName , setSpeakerName ] = useState("");
    const [ talkTitle , setTalkTitle ] = useState("");
    const [ talkDescription , setTalkDescription ] = useState("");
    const [ speakerPhotoUrl , setSpeakerPhotoUrl ] = useState("");
    // INFORMAÇÕES DO PALESTRANTE OPCIONAIS
    const [ github , setGithub ] = useState("");
    const [ githubUrl , setGithubUrl ] = useState("");
    const [ instagram , setInstagram ] = useState("");
    const [ instagramUrl , setInstagramUrl ] = useState("");
    const [ linkdin , setLinkdin ] = useState("");
    const [ linkdinUrl , setLinkdinUrl ] = useState("");
    // LISTA
    const [ speakersList , setSpeakerList ] = useState([]);

    return(
    <div className="AddSpeaker">
        <div>
            <h2>Informações obrigatórias do palestrante:</h2>
            <div className="AddSpeaker_input_div">
                <div className="AddSpeaker_input">
                    <h3>Nome do palestrante:</h3>
                    <input type="text" onChange={(e) => setSpeakerName(e.target.value)} value={speakerName}/>
                </div>
                <div className="AddSpeaker_input">
                    <h3>Titulo da palestra:</h3>
                    <input type="text" onChange={(e) => setTalkTitle(e.target.value)} value={talkTitle}/>
                </div>
                <div className="AddSpeaker_input">
                    <h3>Descrição da palestra:</h3>
                    <input type="text" onChange={(e) => setTalkDescription(e.target.value)} value={talkDescription}/>
                </div>
                <div className="AddSpeaker_input">
                    <h3>Url da foto do palestrante:</h3>
                    <input type="text" onChange={(e) => setSpeakerPhotoUrl(e.target.value)} value={speakerPhotoUrl}/>
                    <p>Suba a foto no formato quadrado pra melhor enquadramento</p>
                </div>
            </div>
        </div>

        <div>
            <h2>Informações opcionais do palestrante:</h2>
            <div className="AddSpeaker_input_div">
                <div className="AddSpeaker_input">
                    <h3>Nome do Github:</h3>
                    <input type="text" onChange={(e) => setGithub(e.target.value)} value={github}/>
                </div>
                <div className="AddSpeaker_input">
                    <h3>Url do Github:</h3>
                    <input type="text" onChange={(e) => setGithubUrl(e.target.value)} value={githubUrl}/>
                </div>
                <div className="AddSpeaker_input">
                    <h3>Nome do Instagram:</h3>
                    <input type="text" onChange={(e) => setInstagram(e.target.value)} value={instagram}/>
                </div>
                <div className="AddSpeaker_input">
                    <h3>Url do Instagram:</h3>
                    <input type="text" onChange={(e) => setInstagramUrl(e.target.value)} value={instagramUrl}/>
                </div>
                <div className="AddSpeaker_input">
                    <h3>Nome do LinkedIn:</h3>
                    <input type="text" onChange={(e) => setLinkdin(e.target.value)} value={linkdin}/>
                </div>
                <div className="AddSpeaker_input">
                    <h3>Url do LinkedIn:</h3>
                    <input type="text" onChange={(e) => setLinkdinUrl(e.target.value)} value={linkdinUrl}/>
                </div>
            </div>
        </div>

        <button>Adicionar Palestrante</button>
    </div>
    )
}