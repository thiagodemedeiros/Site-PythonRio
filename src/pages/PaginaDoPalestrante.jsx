import "../styles/PaginaDoPalestrante/PaginaDoPalestrante.css"
import { Speakers } from '../../data/speakers/speakers'
import { useParams } from "react-router-dom"
import { useAtom } from "jotai"
import { speakersAtom } from "../jotai/AtomsInscrevaSe"
import { useEffect } from 'react'
import logo_github from '/redes_logos/github-logo.png'
import logo_instagram from '/redes_logos/instagram-logo.png'
import logo_linkdin from '/redes_logos/linkdin-logo.png'

export default function PaginaDoPalestrante() {
    const { id } = useParams();
    const [ speakersAtomList , _ ] = useAtom(speakersAtom);
    const speaker = speakersAtomList.find(
        (s) => s.id == id
    );

    useEffect(() => {
        console.log("PaginaDoPalestrante");
        console.log(speaker);
        console.log(id);
    }, []);

    if (!speaker) {
        return (<>
            <div className="PaginaDoPalestrante">
                <h2>Palestrante não encontrado</h2>
            </div>
        </>)
    }

    return (<>
        <div className="PaginaDoPalestrante">

            <div className="PaginaDoPalestrante_card">
                <div className="PaginaDoPalestrante_card_titulo">
                    <img src={speaker.speakerPhotoUrl} alt="Foto do Palestrante" />
                    <div className="PaginaDoPalestrante_card_titulo_texto">
                        <h4>{speaker.speakerName}</h4>
                        <h5>{speaker.talkTitle}</h5>
                        <p>{speaker.talkDescription}</p>
                    </div>
                </div>

                {(speaker.githubUrl || speaker.instagramUrl || speaker.linkdinUrl) && (
                    <div className="PaginaDoPalestrante_card_links">
                    {speaker.githubUrl && (
                        <a href={speaker.githubUrl}>
                            <div className="PaginaDoPalestrante_card_links_item">
                                <img src={logo_github} alt="Logo do GitHub" />
                                <h6>{speaker.github}</h6>
                            </div>
                        </a>
                    )}
                    {speaker.instagramUrl && (
                        <a href={speaker.instagramUrl}>
                            <div className="PaginaDoPalestrante_card_links_item">
                                <img src={logo_instagram} alt="Logo do Instagran" />
                                <h6>{speaker.instagram}</h6>
                            </div>
                        </a>
                    )}
                    {speaker.linkdinUrl && (
                        <a href={speaker.linkdinUrl} target="_blank">
                            <div className="PaginaDoPalestrante_card_links_item">
                                <img src={logo_linkdin} alt="Logo do Linkdin" />
                                <h6>{speaker.linkdin}</h6>
                            </div>
                        </a>
                    )}
                    </div>
                )}
            </div>
        </div>
    </>)
}