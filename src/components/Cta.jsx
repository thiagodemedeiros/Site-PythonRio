import "../styles/components/cta.css"
import dayjs from "dayjs";
import { parse } from 'yaml';
import EventConfigData from "../../data/EventConfig.yaml?raw";
import { useEffect, useState } from "react";

const EventConfig = parse(EventConfigData).EventConfig;

export default function Cta() {
    const [ hasEvent , setHasEvent] = useState(false);
    const [ loading , setLoading ] = useState(true);
    const today = dayjs().add(-1, "day");
    const eventDay = dayjs(EventConfig.day);

    useEffect(() => {
        if (eventDay.isAfter(today)) {
            setHasEvent(true);
        }
        setLoading(false);
    }, [])

    return (
        <>
            <div className="cta">
                {loading ? (
                    <h4>...Carregando...</h4>
                ) : !hasEvent ? (
                    <>
                    <h4>O nosso próximo evento já tem data marcada!</h4>
                    <a href={EventConfig.inscription_form_url} target="_blank">
                        <button>INSCREVA-SE NO NOSSO PRÓXIMO EVENTO</button>
                    </a>
                    </>
                ) : (
                    <h4>Em breve novos eventos!!!</h4>
                )}
            </div>
        </>
    )
}