import "../styles/PaginaDoPalestrante/PaginaDoPalestrante.css"
import { Speakers } from '../../data/speakers/speakers'
import img from '../../public/speakers_photos/foto_madu.jpg'
import { useParams } from "react-router-dom"

export default function PaginaDoPalestrante() {
    const { nome } = useParams();
    const speaker = Speakers.find(
        (s) => s.nome.toLocaleLowerCase().replaceAll(" ", "-") === nome
    );

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
                    <img src={speaker.foto} alt="Foto do Palestrante" />
                    <div className="PaginaDoPalestrante_card_titulo_texto">
                        <h4>{speaker.nome}</h4>
                        <h5>{speaker.titulo}</h5>
                        <p>{speaker.descricao}</p>
                    </div>
                </div>

                <div className="PaginaDoPalestrante_card_links">
                {speaker.link_github && (
                    <a href={speaker.link_github}>
                        <div className="PaginaDoPalestrante_card_links_item">
                            <img src="" alt="Logo do GitHub" />
                            <h6>{speaker.github}</h6>
                        </div>
                    </a>
                )}
                {speaker.link_instagran && (
                    <a href={speaker.link_instagran}>
                        <div className="PaginaDoPalestrante_card_links_item">
                            <img src="" alt="Logo do Instagran" />
                            <h6>{speaker.instagran}</h6>
                        </div>
                    </a>
                )}
                {speaker.link_linkedin && (
                    <a href={speaker.link_linkedin}>
                        <div className="PaginaDoPalestrante_card_links_item">
                            <img src="" alt="Logo do Linkdin" />
                            <h6>{speaker.linkedin}</h6>
                        </div>
                    </a>
                )}
                </div>
            </div>
        </div>
    </>)
}