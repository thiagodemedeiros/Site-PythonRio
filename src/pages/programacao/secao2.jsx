import CardPalestrante from './assets/CardPalestrante'
import './secao2.css'
import foto_claudio from "/claudio.png"

const speakers = [
    {
    id: 3,
    nome: "Claudio",
    palestra: "Usando Scrapy para obter dados públicos de maneira estruturada",
    palestra_descricao: 'Mostrar o uso do framework Scrapy para fazer web scraping de órgãos públicos brasileiros (essa é minha experência, mas pode ser usado em qualuer site), incluindo medidas de evitar bloqueios (resolvedor de captcha, Proxyrotation, user agent rotation) e de processamento de dados.',
    foto: foto_claudio,
    instagram_link: "",
    instagram_arroba: "",
    linkedin_link: "https://www.linkedin.com/in/caazzi/",
    linkedin_arroba: "caazzi",
    github_link: "https://github.com/caazzi",
    github_arroba: "caazzi",
    }];

const speaker = speakers[0]

export default function Secao2 () {
    return (
        <>
            <div className='Secao2-horario'>
                <h5>16:10</h5>
            </div>

            <div className='Secao2-palestrante'>
                <a href={`/sobrepalestrante/${speaker.id}`}>
                    <CardPalestrante 
                        style = {{border: '#1D2F57 solid 3px',boxShadow: '5px 5px 2px 1px #A983AF, 1px 1px 1px 1px #A983AF'}}
                        nome={speaker.nome} tema_palestra={speaker.palestra} foto_palestrante={speaker.foto}
                        instagram={speaker.instagram_link} instagram_arroba={speaker.instagram_arroba}
                        linkedin={speaker.linkedin_link} linkedin_arroba={speaker.linkedin_arroba}
                        github={speaker.github_link} github_arroba={speaker.github_arroba}
                    />
                </a>
            </div>
        </>
    )
}