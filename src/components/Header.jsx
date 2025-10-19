import "../styles/components/Header.css"
import logo from "../assets/home/Vector.png"
import Button from "./Button"

export default function Header() {
    return (
        <div className="header">
            <a href="/">
                <img src={logo} alt="Logo da Python On Rio" />
            </a>

            <div className="header-buttons">
                <Button texto={"Próximo evento"} width="180px"
                height="45px" fontsize='18px'/>
                <Button texto={"Sobre"} width="120px"
                height="45px" fontsize='18px'/>
                <Button texto="INSCREVA-SE" width="180px"
                height="55px" backgroundcolor="#48517C"
                color="#FCFCFA" fontsize='18px'/>
            </div>
        </div>
    )
}