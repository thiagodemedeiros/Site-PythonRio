import UseSignIn from "./UseSignIn";
import UseSignOut from "./UseSignOut";
import { userUuidAtom } from "../../../jotai/Atoms"
import { useAtom } from "jotai";

export default function Sign() {
    const [userUuid] = useAtom(userUuidAtom)

    console.log(userUuid)
    return(
    <>
        {userUuid ? <UseSignOut/> : <UseSignIn/>}
    </>
    )
}

//teste@gmail.com
//123