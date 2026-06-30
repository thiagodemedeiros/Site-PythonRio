import { parse } from 'yaml';
import EventConfigData from "../../../../data/EventConfig.yaml?raw";
import './styles/Section1InscrevaSe.css'

const EventConfig = parse(EventConfigData).EventConfig;

export default function Section1InscrevaSe() {
    return ( <>
        <div className="Section1InscrevaSe">
            <div className='Section1InscrevaSe_patrocinio'>
                <h4>Em parceria com:</h4>
                <img 
                    src={EventConfig.sponsor_logo} 
                    alt={`Logo do patrocinador: ${EventConfig.event_sponsor}`}
                />
            </div>
        </div>
        <div className='Section1InscrevaSe_aba'>
            <h4>Apresentamos o nosso próximo evento</h4>
        </div>
    </> )
}