import { atom } from 'jotai';
import { supabase } from '../SupabaseClient';

export const googleIframeAtom = atom(null);
export const inscriptionFormUrlAtom = atom(null);
export const eventDayAtom = atom(null);
export const eventHourAtom = atom(null);
export const eventSponsorLogoUrlImgAtom = atom(null);
export const speakersAtom = atom(async () => {
    const { data , error } = await supabase
                                .from("events")
                                .select("*")
    if (error) {
        console.error(`error: ${error}`)
        return
    }
    return data[1]?.speakers ?? []
});