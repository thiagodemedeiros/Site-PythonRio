import '../../styles/inscreva-se/Section4InscrevaSe.css'
import Button from '../../components/Button'

export default function Section4InscrevaSe() {
    return (<>
        <div className='Section4InscrevaSe_titulo'>
            <h4>Sim!!! O nosso próximo evento já tem data marcada!</h4>
        </div>

        <div className="Section4InscrevaSe">
            <div className='Section4InscrevaSe_texto'>
                <h4>Nesse Dia 10 de Dezembro</h4>
                <h4>Às 18:00</h4>
                <h4>Você tem um encontro com a gente no WeWork Bossa Nova Mall</h4>
            </div>
        </div>

        <div className='Section4InscrevaSe_cta'>
            <h4>Inscreva-se agora no nosso próximo evento!</h4>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSeWY78hG91ncBOp-x6phFlReOkGjfJpRIeoVM5NddHBjFALlw/viewform" target="_blank">
                <button>Clique aqui e Inscreva-se</button>
            </a>
            <h4>Mas seja rápido, pois temos vagas limitadas!!!</h4>
        </div>
    </>)
}