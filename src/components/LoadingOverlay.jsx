import "../styles/components/loadingOverlay.css"
import logo from "../assets/home/logo_section1_home.png"

export default function LoadingOverlay() {
    return(
    <div className="LoadingOverlay">
        <img src={logo} alt="logo pythonrio" />
    </div>
    )
}