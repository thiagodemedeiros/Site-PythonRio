import CardPalestrante from '../../components/CardPalestrante'
import '../../styles/inscreva-se/Section2InscrevaSe.css'
import { Link } from 'react-router-dom'
import { useAtom } from "jotai"
import { speakersAtom } from "../../jotai/AtomsInscrevaSe";
import { useEffect } from 'react'

const LinkParaFormularioDePalestrantes = "https://docs.google.com/forms/d/e/1FAIpQLSdSsBiiG7k7Q_b4QHXpsmYwOoEPS2dGWXDX0ypVBbjBZajCKw/viewform";

export default function Section2InscrevaSe() {
    const [ speakersAtomList , _ ] = useAtom(speakersAtom);

    if (speakersAtomList.length === 0) {
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
                <h4 className='Section2InscrevaSe_h4_Cards_1'>Para mais informações, clique no palestrante</h4>

                <div className='Section2InscrevaSe_Cards_Wrap'>
                    
                    {speakersAtomList.map((speaker, index) => (
                        <Link 
                            key = {index}
                            to = {`/PaginaDoPalestrante/${speaker.id}`}
                        >
                            <CardPalestrante key = {speaker.index}
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