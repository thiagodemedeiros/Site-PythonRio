import AddEvent from "./AddEvent"
import AddSpeaker from "./AddSpeaker"

export default function EventForms() {
    return(
    <div className="EventForms">
        <AddSpeaker/>
        <AddEvent/>
    </div>
    )
}