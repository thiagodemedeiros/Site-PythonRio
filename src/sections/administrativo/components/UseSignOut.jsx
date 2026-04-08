import { supabase } from "../../../SupabaseClient"
import { userUuidAtom } from "../../../jotai/Atoms"
import { useAtom } from "jotai"
import Forms from "./Forms"

export default function UseSignOut() {
    const [ userUuid , setUserUuid] = useAtom(userUuidAtom)

    async function signOut() {
        await supabase.auth.signOut()
        console.log(userUuid)
        setUserUuid(null)
        console.log(userUuid)
    }

    return (
    <>
        <div className="Sign">
            <button onClick={() => signOut()}>LogOUT</button>
        </div>
        <div className="Sign_Forms">
            <Forms/>
        </div>
    </>
    )
}