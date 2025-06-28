import React from "react";
import Section1 from "./sections/section1";
import Section2 from "./sections/Section2";
import Section3 from "./sections/Section3";
import Section4 from "./sections/Section4";
import Footer from "../Footer";

export default function Home () {
    return (
        <div>
            <Section1/>
            <Section2/>
            <Section3/>
            <Section4/>
            <Footer/>
        </div>
    )
}