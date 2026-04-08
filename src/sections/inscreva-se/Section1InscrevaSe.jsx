import '../../styles/inscreva-se/Section1InscrevaSe.css'
import EventData from './EventData'
import { useAtom } from 'jotai'
import { eventSponsorLogoUrlImgAtom } from '../../jotai/AtomsInscrevaSe'
import { useEffect } from 'react'

export default function Section1InscrevaSe() {
    const [ eventSponsorLogoUrlImg , _ ] = useAtom(eventSponsorLogoUrlImgAtom);

    useEffect(() => {
        if (eventSponsorLogoUrlImg) {
            console.log("Section1InscrevaSe");
            console.log(eventSponsorLogoUrlImg);
        }
    }, [eventSponsorLogoUrlImg])

    return ( <>
        <div className="Section1InscrevaSe">
            <div className='Section1InscrevaSe_patrocinio'>
                <h4>Em parceria com:</h4>
                <img src={eventSponsorLogoUrlImg} alt={eventSponsorLogoUrlImg} />
            </div>
        </div>
        <div className='Section1InscrevaSe_aba'>
            <h4>Apresentamos o nosso próximo evento</h4>
            <EventData/>
        </div>
    </> )
}