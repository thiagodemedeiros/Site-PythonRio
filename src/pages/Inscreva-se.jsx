import Section1InscrevaSe from '../sections/inscreva-se/Section1InscrevaSe'
import Section2InscrevaSe from '../sections/inscreva-se/Section2InscrevaSe'
import Section3InscrevaSe from '../sections/inscreva-se/Section3InscrevaSe'
import Section4InscrevaSe from '../sections/inscreva-se/Section4InscrevaSe'
import { useState } from 'react'
import { supabase } from '../SupabaseClient'

export default function InscrevaSe() {
    let indexData = "Sem evento";

    async function verificarExistenciaDeEventos() {
        const { data , error } = await supabase
                                .from("events")
                                .select("*")
        if (error) {
            console.error(`error: ${error}`)
            return
        }
        data.find((d, index) => {
            if (today.isBefore(dayjs(d.day))) {
                indexData = index;
                return true
            }
        });
    }

    if (indexData == "Sem evento") {
        return(
            <>COMEÇAR</>
        );
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