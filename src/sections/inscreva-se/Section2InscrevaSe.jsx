import CardPalestrante from '../../components/CardPalestrante'
import '../../styles/inscreva-se/Section2InscrevaSe.css'
import { Link } from 'react-router-dom'
import { useAtom } from "jotai"
import { speakersAtom } from "../../jotai/AtomsInscrevaSe";
import { useEffect } from 'react'

export default function Section2InscrevaSe() {
    const [ speakersAtomList , _ ] = useAtom(speakersAtom);

    useEffect(() => {
        console.log("Section2InscrevaSe")
        console.log(speakersAtomList)
    }, [speakersAtomList])

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