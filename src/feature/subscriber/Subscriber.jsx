import Section1InscrevaSe from './sections/Section1InscrevaSe'
import Section2InscrevaSe from './sections/Section2InscrevaSe'
import Section3InscrevaSe from './sections/Section3InscrevaSe'
import Section4InscrevaSe from './sections/Section4InscrevaSe'
import NoEvent from './sections/NoEvent'
import dayjs from 'dayjs'
import { useEffect, useState } from 'react'

export const Subscriber = () => {
    const [ event , setEvent] = useState("Sem evento");
    const [ loading , setLoading ] = useState(true);
    const today = dayjs().add(-1, "day");
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