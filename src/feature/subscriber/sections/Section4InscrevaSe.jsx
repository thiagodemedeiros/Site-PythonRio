import { parse } from 'yaml';
import EventConfigData from "../../../../data/EventConfig.yaml?raw";
import './styles/Section4InscrevaSe.css'
import dayjs from "dayjs";
import "dayjs/locale/pt-br";
dayjs.locale("pt-br");

const EventConfig = parse(EventConfigData).EventConfig;

export default function Section4InscrevaSe() {
    const formattedData = dayjs(EventConfig.day).format("D [de] MMMM, dddd");
    const LinkParaInscricao = EventConfig.inscription_form_url;

    return (<>
        <div className='Section4InscrevaSe_titulo'>
            <h4>Sim!!! O nosso próximo evento já tem data marcada!</h4>
        </div>

        <div className="Section4InscrevaSe">
            <div className='Section4InscrevaSe_texto'>
                <h4>Nesse Dia {formattedData}</h4>
                <h4>Às {EventConfig.hour}</h4>
                <h4>Você tem um encontro com a gente!!!</h4>
                <h4>Local : {EventConfig.event_local_name}</h4>
            </div>
        </div>

        <div className='Section4InscrevaSe_cta'>
            <h4>Inscreva-se agora no nosso próximo evento!</h4>
            <a href={LinkParaInscricao} target="_blank">
                <button>Clique aqui e Inscreva-se</button>
            </a>
            <h4>Mas seja rápido, pois temos vagas limitadas!!!</h4>
        </div>
    </>)
}