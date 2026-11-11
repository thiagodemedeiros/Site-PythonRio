import { parse } from 'yaml';
import EventConfigData from "../../../../data/EventConfig.yaml?raw";
import CardPalestrante from '../../../components/CardPalestrante'
import './styles/Section2InscrevaSe.css'
import { Link } from 'react-router-dom'

const EventConfig = parse(EventConfigData).EventConfig;

export default function Section2InscrevaSe() {
    if (!EventConfig.show_speakers) {
        return (
            <div className='Section2InscrevaSe'>
                <h4 className='Section2InscrevaSe_h4_1'>Clique no botão abaixo e envie sua palestra!</h4>
                <button
                    className='Section2InscrevaSe_Button'
                    onClick={() => window.open(
                        LinkParaFormularioDePalestrantes,
                        '_blank',
                        'noopener,noreferrer'
                    )}
                >
                    Enviar palestra
                </button>
            </div>
        )
    }

    return(<>
        <div className='Section2InscrevaSe'>
            <h4 className='Section2InscrevaSe_h4_1'>Com a participação de:</h4>

            <div className='Section2InscrevaSe_Cards'>
                <div className='Section2InscrevaSe_Cards_Wrap'>
                    
                    {EventConfig.speakers.map((speaker, index) => (
                        <Link 
                            key = {index}
                            to = {`/PaginaDoPalestrante/${speaker.id}`}
                        >
                            <CardPalestrante key = {speaker.id}
                                FotoDoPalestrante={speaker.speakerPhotoUrl}
                                NomeDoPalestrante={speaker.speakerName}
                                TituloDaPalestra={speaker.talkTitle}/>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    </>)
}