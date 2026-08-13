import Section1InscrevaSe from './sections/Section1InscrevaSe'
import Section2InscrevaSe from './sections/Section2InscrevaSe'
import Section3InscrevaSe from './sections/Section3InscrevaSe'
import Section4InscrevaSe from './sections/Section4InscrevaSe'
import EventConfigData from "../../../data/EventConfig.yaml?raw";
import dayjs from 'dayjs'
import { parse } from 'yaml';
import { useEffect, useState } from 'react'

const EventConfig = parse(EventConfigData).EventConfig;

export const Subscriber = () => {
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

    if (!hasEvent)
        return <></>

    return (
        <>
            <Section1InscrevaSe/>
            <Section2InscrevaSe/>
            <Section3InscrevaSe/>
            <Section4InscrevaSe/>
        </>
    )
}