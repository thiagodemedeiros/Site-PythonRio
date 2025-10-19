import Header from "../components/Header"
import Section1 from "../sections/home/Section1"
import Section2 from "../sections/home/Section2"
import Section3 from "../sections/home/Section3"
import Cta from "../components/Cta"

export default function Home() {
    return(
        <>
            <Header/>
            <Section1/>
            <Section2/>
            <Section3/>
            <Cta/>
        </>
    )
}