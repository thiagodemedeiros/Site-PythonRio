import FotoPalestrante from './assets/Foto Palestrante.png'
import Instagram from './assets/ig.png'
import LinkdIn from './assets/linkedin.png'
import Github from './assets/github.png'
import './CardPalestranteSobre.css'

export default function CardPalestrante ({nome,tema_palestra,foto_palestrante = FotoPalestrante,
                                            instagram,instagram_arroba,
                                            linkedin,linkedin_arroba,
                                            github,github_arroba}) {
    return (
        <div className='CardPalestrante-section'>
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
                        <div className='CardPalestrante-redes-div'>
                            <img src={Instagram} alt="Instagram logo" />
                            <h4>{instagram_arroba}</h4>
                        </div>
                    </a>
                )}

                {linkedin && (
                    <a href={linkedin}>
                    <div className='CardPalestrante-redes-div'>
                        <img src={LinkdIn} alt="LinkdIn logo" />
                        <h4>{linkedin_arroba}</h4>
                    </div>
                    </a>
                )}

                {github && (
                    <a href={github}>
                    <div className='CardPalestrante-redes-div'>
                        <img src={Github} alt="LinkdIn logo" />
                        <h4>{github_arroba}</h4>
                    </div>
                    </a>
                )}
            </div>
        </div>
    )
}