import "../styles/Header.css"
import logo from "../assets/Vector.png"

export default function Header() {
    return (
        <div className="header">
            <img src={logo} alt="Logo da Python On Rio" />

            <div className="header-buttons">
                <button>Próximo Evento</button>
                <button>Sobre</button>
                <button>INSCREVA-SE</button>
            </div>
        </div>
    )
}