import "../styles/components/cta.css"
import { useAtom } from "jotai"
import { useEffect , useState } from 'react';
import { inscriptionFormUrlAtom } from "../jotai/AtomsInscrevaSe";
import dayjs from "dayjs";
import { supabase } from "../SupabaseClient";

export default function Cta() {
    const [ inscriptionFormUrl , _ ] = useAtom(inscriptionFormUrlAtom);
    const [ event , setEvent] = useState("Sem evento");
    const [ loading , setLoading ] = useState(true);
    const today = dayjs();

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
        data.find((d, index) => {
            if (today.isBefore(dayjs(d.day))) {
                setEvent(index)
                setLoading(false);
                return true
            }
        });
        setLoading(false);
    }
    
        useEffect(() => {
            if (inscriptionFormUrl) {
                // console.log("formulario-cta")
                console.log(inscriptionFormUrl);
            };
        }, [inscriptionFormUrl]);

        useEffect(() => {
            verificarExistenciaDeEventos();
        }, []);
    
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