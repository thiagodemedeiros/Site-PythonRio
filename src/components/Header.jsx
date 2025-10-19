import "../styles/Header.css"
import logo from "../assets/Vector.png"
import Button from "./Button"

export default function Header() {
    return (
        <div className="header">
            <a href="/">
                <img src={logo} alt="Logo da Python On Rio" />
            </a>

            <div className="header-buttons">
                <Button texto={"Próximo evento"} width="150px"
                height="30px"/>
                <Button texto={"Sobre"} width="90px"
                height="30px"/>
                <Button texto="INSCREVA-SE" width="140px"
                height="35px" backgroundcolor="#48517C" color="#FCFCFA"/>
            </div>
        </div>
    )
}