import FotoPalestrante from './Foto Palestrante.png'
import Instagram from './ig.png'
import LinkdIn from './linkedin.png'
import Github from './github.png'
import './CardPalestrante.css'

export default function CardPalestrante({
  style = {
    border: '#f8b57a solid 3px',
    boxShadow: '5px 5px 2px 1px #fdab63, 1px 1px 1px 1px #f8b57a'
  },nome,tema_palestra,foto_palestrante = FotoPalestrante,instagram,instagram_arroba,linkedin,linkedin_arroba,github,github_arroba}) {
    return (
        <div className='CardPalestrante-section' style={style}>
            <div className='CardPalestrante-texto-foto'>
                <img src={foto_palestrante} alt="foto palestrante" />
                <div className='CardPalestrante-texto-foto-texto'>
                    <h4>{nome}</h4>
                    <p>{tema_palestra}</p>
                </div>
            </div>

            <div className='CardPalestrante-redes'>
                {instagram && (
                    <a href={instagram}>
                        <div className='CardPalestranteSobre-redes-div'>
                            <img src={Instagram} alt="Instagram logo" />
                            <h4>{instagram_arroba}</h4>
                        </div>
                    </a>
                )}

                {linkedin && (
                    <a href={linkedin}>
                    <div className='CardPalestranteSobre-redes-div'>
                        <img src={LinkdIn} alt="LinkdIn logo" />
                        <h4>{linkedin_arroba}</h4>
                    </div>
                    </a>
                )}

                {github && (
                    <a href={github}>
                    <div className='CardPalestranteSobre-redes-div'>
                        <img src={Github} alt="LinkdIn logo" />
                        <h4>{github_arroba}</h4>
                    </div>
                    </a>
                )}
            </div>
        </div>
    )
}