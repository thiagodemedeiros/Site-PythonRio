import { parse } from 'yaml';
import EventConfigData from "../../../../data/EventConfig.yaml?raw";
import './styles/Section3InscrevaSe.css';

const EventConfig = parse(EventConfigData).EventConfig;

export default function Section3InscrevaSe() {
    return (
        <div className="Section3InscrevaSe">
            <div className='Section3InscrevaSe_titulo'>
                <h3>Localizado no:</h3>
            </div>

            <iframe className='Section3InscrevaSe_mapa'
                src={EventConfig.google_iframe}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
    )
}