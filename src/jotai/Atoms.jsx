import { atomWithStorage } from 'jotai/utils';

export const userUuidAtom = atomWithStorage(
    "userUuid",
    null,
    {
        getItem: (key) => sessionStorage.getItem(key),
        setItem: (key, value) => sessionStorage.setItem(key, value),
        removeItem: (key) => sessionStorage.removeItem(key),
    }
)