import Layout from "../layout"
import Section1 from "../sections/home/Section1"
import Section2 from "../sections/home/Section2"
import Section3 from "../sections/home/Section3"

export default function Home() {
    return(
        <>
            <Layout>
                <Section1/>
                <Section2/>
                <Section3/>
            </Layout>
        </>
    )
}