import Section1InscrevaSe from './sections/Section1InscrevaSe'
import Section2InscrevaSe from './sections/Section2InscrevaSe'
import Section3InscrevaSe from './sections/Section3InscrevaSe'
import Section4InscrevaSe from './sections/Section4InscrevaSe'
import dayjs from 'dayjs'
import { useEffect, useState } from 'react'

export const Subscriber = () => {
    const [ event , setEvent] = useState("Sem evento");
    const today = dayjs().add(-1, "day");

    return (
        <>
            <Section1InscrevaSe/>
            <Section2InscrevaSe/>
            <Section3InscrevaSe/>
            <Section4InscrevaSe/>
        </>
    )
}