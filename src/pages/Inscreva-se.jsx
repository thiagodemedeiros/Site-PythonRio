import Section1InscrevaSe from '../sections/inscreva-se/Section1InscrevaSe'
import Section2InscrevaSe from '../sections/inscreva-se/Section2InscrevaSe'
import Section3InscrevaSe from '../sections/inscreva-se/Section3InscrevaSe'
import Section4InscrevaSe from '../sections/inscreva-se/Section4InscrevaSe'
import Loading from '../components/Loading'
import NoEvent from '../sections/inscreva-se/NoEvent'
import dayjs from 'dayjs'
import { supabase } from '../SupabaseClient'
import { useEffect, useState } from 'react'

export default function InscrevaSe() {
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
        verificarExistenciaDeEventos();
    }, []);

    if (loading) {
        return(<Loading/>)
    }

    if (event == "Sem evento") {
        console.log(event)
        return(<NoEvent/>);
    };

    return (
        <>
            <Section1InscrevaSe/>
            <Section2InscrevaSe/>
            <Section3InscrevaSe/>
            <Section4InscrevaSe/>
        </>
    )
}