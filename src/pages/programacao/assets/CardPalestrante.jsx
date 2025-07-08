import Foto from './Foto Palestrante.png'
import Instagram from './ig.png'
import LinkdIn from './linkedin.png'
import './CardPalestrante.css'

export default function CardPalestrante({
  style = {
    border: '#f8b57a solid 3px',
    boxShadow: '5px 5px 2px 1px #fdab63, 1px 1px 1px 1px #f8b57a'
  },}) {
    return (
        <div className='CardPalestrante-section' style={style}>
            <div className='CardPalestrante-texto-foto'>
                <img src={Foto} alt="foto palestrante" />
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