import Header from "./pages/Header"
import Cta from "./pages/Cta"
import Footer from "./pages/Footer"
import { Outlet } from "react-router-dom"

export default function LayoutPadrao () {
    return (
        <>
            <Header/>

            <main>
                <Outlet/>
            </main>

            <Cta/>
            <Footer/>
        </>
    )
}