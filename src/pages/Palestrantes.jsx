import CardPalestranteSobre from '../components/CardPalestranteSobre'
import './Palestrantes.css'

export default function Palestrantes () {
    return (
        <div className='section-palestrantes'>
            <h3 className='section-palestrantes-h3'>Palestrantes</h3>

            <div className='section-palestrantes-cards'>
                <CardPalestranteSobre/>
                <CardPalestranteSobre/>
                <CardPalestranteSobre/>
                <CardPalestranteSobre/>
                <CardPalestranteSobre/>
            </div>
        </div>
    )
}