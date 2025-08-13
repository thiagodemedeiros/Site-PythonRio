import CardPalestrante from './assets/CardPalestrante'
import './secao3.css'
import foto_erika from "/erika.png"

const speakers = [
  {
    id: 2,
    nome: "Erika",
    palestra: "Construindo um RAG Local com Python e Ollama",
    palestra_descricao: 'Um projeto prático e acessível para usar IA generativa com seus próprios dados, direto no seu computador.',
    foto: foto_erika,
    instagram_link: "",
    instagram_arroba: "",
    linkedin_link: "https://www.linkedin.com/in/mateszbueno/",
    linkedin_arroba: "mateszbueno",
    github_link: "https://github.com/erikamatesz",
    github_arroba: "erikamatesz",
  },];

const speaker = speakers[0]

export default function Secao2 () {
    return (
        <>
            <div className='Secao3-horario'>
                <h5>16:50</h5>
            </div>

            <div className='Secao3-palestrante'>
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