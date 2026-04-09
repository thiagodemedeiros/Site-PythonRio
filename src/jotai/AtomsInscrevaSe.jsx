import { atom } from 'jotai';
import { supabase } from '../SupabaseClient';
import dayjs from 'dayjs';

export const googleIframeAtom = atom(null);
export const inscriptionFormUrlAtom = atom(null);
export const eventDayAtom = atom(null);
export const eventHourAtom = atom(null);
export const eventSponsorLogoUrlImgAtom = atom(null);
export const eventLocalNameAtom = atom(null);

export const speakersAtom = atom(async () => {
    const today = dayjs();
    let indexData;
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
    return data[indexData]?.speakers ?? []
});