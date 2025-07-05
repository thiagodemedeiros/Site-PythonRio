import FotoPalestrante from './assets/Foto Palestrante.png'
import Instagram from './assets/ig.png'
import LinkdIn from './assets/linkedin.png'
import './CardPalestranteSobre.css'

export default function CardPalestrante () {
    return (
        <div className='CardPalestrante-section'>
            <div className='CardPalestrante-texto-foto'>
                <img src={FotoPalestrante} alt="foto palestrante" />
                <div className='CardPalestrante-texto-foto-texto'>
                    <h4>Gato Doidão</h4>
                    <p>Veio para ensinar doidice aos doidois que querem aprender doidicies</p>
                </div>
            </div>

            <div className='CardPalestrante-redes'>
                <a href="">
                <div className='CardPalestrante-redes-div'>
                    <img src={Instagram} alt="Instagram logo" />
                    <h4>@procuraaiotario</h4>
                </div>
                </a>

                <a href="">
                <div className='CardPalestrante-redes-div'>
                    <img src={LinkdIn} alt="LinkdIn logo" />
                    <h4>@procuraaiotario</h4>
                </div>
                </a>
            </div>
        </div>
    )
}