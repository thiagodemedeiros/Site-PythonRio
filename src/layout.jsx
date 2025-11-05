import Header from "./components/Header";
import Cta from "./components/Cta";
import Footer from "./components/Footer";

export default function Layout({children}) {
    return (
        <>
            <Header/>
            <main>{children}</main>
            <Cta/>
            <Footer/>
        </>
    )
}