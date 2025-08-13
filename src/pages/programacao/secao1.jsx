import CardPalestrante from './assets/CardPalestrante'
import './secao1.css'
import foto_moscatel from "/moscatel.png"

const speakers = [
    {
        id: 1,
        nome: "Moscatel",
        palestra: "Paradoxo de Moravec - Complexidade do aprendizado para Ia em tarefas banais",
        palestra_descricao: 'Paradoxo de Moravec explica o porquê tarefas simples para seres humanos são complexas para Inteligência artificial, como abrir uma porta, enquanto tarefas complexas são fáceis para IA.',
        foto: foto_moscatel,
        instagram_link: "https://www.instagram.com/gabriel_fevrier/",
        instagram_arroba: "@gabriel_fevrier",
        linkedin_link: "https://www.linkedin.com/in/gabrielmfevrier/",
        linkedin_arroba: "gabrielmfevrier",
        github_link: "",
        github_arroba: "",
    },];

const speaker = speakers[0];

export default function Secao1 () {
    return (
        <>
            <div className='Secao1-horario'>
                <h4>Programação</h4>
                <h5>15:30</h5>
            </div>

            <div className='Secao1-palestrante'>
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