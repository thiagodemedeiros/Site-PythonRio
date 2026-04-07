import { supabase } from "../../../SupabaseClient"
import { userUuidAtom } from "../../../jotai/Atoms"
import { useAtom } from "jotai"
import { useState } from "react"

export default function UseSignIn() {
    const [ _ , setUserUuid] = useAtom(userUuidAtom)
    const [ email , setEmail ] = useState("")
    const [ pass , setPass ] = useState("")

    async function signIn(email , password) {
        console.log(`${email}`)
        console.log(`${password}`)
        console.log(`Começando login`)

        const { data, error } = await supabase.auth.signInWithPassword({
            email,
            password,
        })

        if (error) {
            console.error(error.message)
        } else {
            console.log('Logado:', data)
            console.log(data.user.id)
            setUserUuid(data.user.id);
        }
    }

    return(
    <div className="Sign">
        <div className="SignIn_input">
            <h5>Email:</h5>
            <input type="text" onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="SignIn_input">
            <h5>Senha:</h5>
            <input type="text" onChange={(e) => setPass(e.target.value)} />
        </div>
        <button onClick={() => signIn(email, pass)}>LogIN</button>
    </div>
    )
}