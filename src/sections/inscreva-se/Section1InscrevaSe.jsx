import '../../styles/inscreva-se/Section1InscrevaSe.css'
import LOGO_FIAP from '../../assets/InscrevaSe/Section1InscrevaSe/logofiap.png'

export default function Section1InscrevaSe() {
    return ( <>
        <div className="Section1InscrevaSe">
            <div className='Section1InscrevaSe_patrocinio'>
                <h4>Em parceria com:</h4>
                <img src={LOGO_FIAP} alt="Logo da FIAP" />
            </div>
        </div>
        <div className='Section1InscrevaSe_aba'>
            <h4>Apresentamos o nosso próximo evento</h4>
        </div>
    </> )
}