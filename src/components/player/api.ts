import axios from "axios";
import type { Avator, LLMS, Voice } from "./types";

export const getSessionToken = async ({ avatorId, voiceId, brainName, systemPrompt, name }: { avatorId: string, voiceId: string, brainName: string, systemPrompt: string, name: string }): Promise<string> => {
    const res = await axios.post<{ sessionToken: string }>(`${import.meta.env.VITE_ANUM_BASE_URL}/auth/session-token`, {
        personaConfig: {
            "name": name,
            "avatarId": avatorId,
            "voiceId": voiceId,
            "brainType": brainName,
            "systemPrompt": systemPrompt,
        }
    }, {
        headers: {
            "Authorization": `Bearer ${import.meta.env.VITE_ANUM_KEY}`
        }
    })

    return res?.data?.sessionToken
}


export const listLlm = async (): Promise<LLMS[]> => {
    const res = await axios.get<{ data: LLMS[] }>(`${import.meta.env.VITE_ANUM_BASE_URL}/llms?perPage=${10}&page=${1}&includeDefaults=${true}`, {
        headers: {
            "Authorization": `Bearer ${import.meta.env.VITE_ANUM_KEY}`
        }
    })
    return res?.data?.data
}

export const listVoices = async (): Promise<Voice[]> => {
    const res = await axios.get<{ data: Voice[] }>(`${import.meta.env.VITE_ANUM_BASE_URL}/voices?perPage=${10}&page=${1}&includeDefaults=${true}`, {
        headers: {
            "Authorization": `Bearer ${import.meta.env.VITE_ANUM_KEY}`
        }
    })
    return res?.data?.data
}
export const listAvator = async (): Promise<Avator[]> => {
    const res = await axios.get<{ data: Avator[] }>(`${import.meta.env.VITE_ANUM_BASE_URL}/avatars?perPage=${10}&page=${1}&includeDefaults=${true}`, {
        headers: {
            "Authorization": `Bearer ${import.meta.env.VITE_ANUM_KEY}`
        }
    })
    return res?.data?.data
}


export const generateListing = async (): Promise<{
    name: string,
    image: string,
    avatorId: string
    voiceId: string;
    llms: string
}[]> => {
    const llms = await listLlm();
    const avators = await listAvator();
    const voices = await listVoices();

    return avators.map(((avator) => ({
        name: avator?.displayName,
        image: avator?.imageUrl,
        avatorId: avator?.id,
        voiceId: voices.find((voice) => voice.displayName === avator.displayName)?.id ?? '',
        llms: llms[0]?.id,
    })))

}