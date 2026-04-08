import { useState , useEffect } from "react";
import { useAtom } from "jotai";
import { speakersListAtom } from "./AtomsEventForms";

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
    const [ speakersList , setSpeakersList ] = useAtom(speakersListAtom);

    const speakerJson = {
        speakerName : speakerName,
        talkTitle : talkTitle,
        talkDescription : talkDescription,
        speakerPhotoUrl : speakerPhotoUrl,
        github : github,
        githubUrl : githubUrl,
        instagram : instagram,
        instagramUrl : instagramUrl,
        linkdin : linkdin,
        linkdinUrl : linkdinUrl
    }

    const resetAllStatesBeforeSendToList = () => {
        setSpeakerName("");
        setTalkTitle("");
        setTalkDescription("");
        setSpeakerPhotoUrl("");
        setGithub("");
        setGithubUrl("");
        setInstagram("");
        setInstagramUrl("");
        setLinkdin("");
        setLinkdinUrl("");
    };

    const addSpeakerToList = () => {
        if (!speakerName || !talkTitle || !talkDescription || !speakerPhotoUrl) {
            alert("Informações obrigatórias não preenchidas")
            return
        }
        setSpeakersList([...speakersList, speakerJson]);
        console.log(speakerJson)
        resetAllStatesBeforeSendToList();
    };

    const removeSpeakerToList = (speakerIdToRemove) => {
        setSpeakersList(speakersList.filter(
            (item, index) => index !== speakerIdToRemove
        ));
    };

    useEffect(() => {
        console.log(speakersList)
    }, [speakersList]);

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

        <button onClick={() => addSpeakerToList()}>Adicionar Palestrante</button>

        <div className="SpeakersListDiv">
            {speakersList.map((speaker, index) => (
                <div className="SpeakersListDiv_item">
                    <div className="SpeakersListDiv_item_speaker_infos">
                        <h4>{speaker.speakerName}</h4>
                        <h5>{speaker.talkTitle}</h5>
                        <h5>{speaker.talkDescription}</h5>
                        <img
                            src={speaker.speakerPhotoUrl}
                            alt={`foto de ${speaker.speakerName}`}
                        />
                        <a href={speaker.githubUrl} target="_blank">
                            <h5>{speaker.github}</h5>
                        </a>
                        <a href={speaker.instagramUrl} target="_blank">
                            <h5>{speaker.instagram}</h5>
                        </a>
                        <a href={speaker.linkdinUrl} target="_blank">
                            <h5>{speaker.linkdin}</h5>
                        </a>
                    </div>
                    <button 
                        onClick={() => removeSpeakerToList(index)}
                    >
                        Remover Palestrant
                    </button>
                </div>
            ))}
        </div>
    </div>
    )
}