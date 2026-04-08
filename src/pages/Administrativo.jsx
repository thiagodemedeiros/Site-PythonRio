import Section1Administrativo from "../sections/administrativo/Section1Administrativo"
import "../styles/administrativo/Section1Administrativo.css"
import { userUuidAtom } from "../jotai/Atoms"
import { useAtom } from "jotai"
import { useEffect } from "react"

export default function Administrativo() {
    const [ userUuid , setUserUuid ] = useAtom(userUuidAtom)

    // useEffect(() => {
        // setUserUuid(null);
    // }, [])

    return(<div className="Administrativo">
        <Section1Administrativo/>
    </div>)
}