import "../styles/components/cta.css"
import { useAtom } from "jotai"
import { useEffect , useState } from 'react';
import { inscriptionFormUrlAtom } from "../jotai/AtomsInscrevaSe";
import dayjs from "dayjs";
import { supabase } from "../SupabaseClient";

export default function Cta() {
    const [ inscriptionFormUrl , setInscriptionFormUrl ] = useAtom(inscriptionFormUrlAtom);
    const [ event , setEvent] = useState("Sem evento");
    const [ loading , setLoading ] = useState(true);
    const today = dayjs().add(-1, "day");

    async function verificarExistenciaDeEventos() {
        setLoading(true);
        const { data , error } = await supabase
                                .from("events")
                                .select("*")
        if (error) {
            console.error(`error: ${error}`)
            setLoading(false);
            return
        }
        const nextEvent = data.find((d, index) => {
            if (today.isBefore(dayjs(d.day))) {
                // console.log(d)
                setEvent(index)
                setLoading(false);
                return d
            }
        });
        // console.log(nextEvent);
        setInscriptionFormUrl(nextEvent.inscription_form_url);
        setLoading(false);
    }
    
        useEffect(() => {
            if (!inscriptionFormUrl) {
                // console.log("verificando eventos")
                verificarExistenciaDeEventos()
            };
        }, [inscriptionFormUrl]);
    
        const LinkParaInscricao = inscriptionFormUrl;
    
    return (
        <>
            <div className="cta">
                {loading ? (
                    <h4>...Carregando...</h4>
                ) : event !== "Sem evento" ? (
                    <>
                    <h4>O nosso próximo evento já tem data marcada!</h4>
                    <a href={LinkParaInscricao} target="_blank">
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