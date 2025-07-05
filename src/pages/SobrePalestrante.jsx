import CardPalestranteSobre from '../components/CardPalestranteSobre'
import fundo from '../components/assets/SobrePalestrantes-fundo.png'
import './SobrePalestrante.css'

export default function SobrePalestrantes () {
    return (
        <div>
            <div className="SobrePalestrantes-secao1">
                <h1>Titulo Palestra</h1>
                <p className="SobrePalestrantes-secao1-p">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>

            <div className="SobrePalestrantes-secao2">
                <h4 className="SobrePalestrantes-secao2-h4">Conheça seu palestrante</h4>
            </div>

            <div className="SobrePalestrantes-secao3">
                <CardPalestranteSobre/>
            </div>
        </div>
    )
}