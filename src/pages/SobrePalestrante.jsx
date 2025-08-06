import { useParams, Link } from "react-router-dom";
import CardPalestranteSobre from '../components/CardPalestranteSobre'
import foto_erika from "./home/assets/erika.png"
import foto_claudio from "./home/assets/claudio.png"
import foto_moscatel from "./home/assets/moscatel.png"
import './SobrePalestrante.css'

const speakers = [
  {
    id: 1,
    nome: "Moscatel",
    palestra: "Paradoxo de Moravec - Complexidade do aprendizado para Ia em tarefas banais",
    foto: foto_moscatel,
    instagram_link: "https://www.instagram.com/gabriel_fevrier/",
    instagram_arroba: "@gabriel_fevrier",
    linkedin_link: "https://www.linkedin.com/in/gabrielmfevrier/",
    linkedin_arroba: "gabrielmfevrier",
    github_link: "",
    github_arroba: "",
  },
  {
    id: 2,
    nome: "Erika",
    palestra: "Construindo um RAG Local com Python e Ollama",
    foto: foto_erika,
    instagram_link: "",
    instagram_arroba: "",
    linkedin_link: "https://www.linkedin.com/in/mateszbueno/",
    linkedin_arroba: "mateszbueno",
    github_link: "https://github.com/erikamatesz",
    github_arroba: "erikamatesz",
  },
  {
    id: 3,
    nome: "Claudio",
    palestra: "Usando Scrapy para obter dados públicos de maneira estruturada",
    foto: foto_claudio,
    instagram_link: "",
    instagram_arroba: "",
    linkedin_link: "https://www.linkedin.com/in/caazzi/",
    linkedin_arroba: "caazzi",
    github_link: "https://github.com/caazzi",
    github_arroba: "caazzi",
  }
];

export default function SobrePalestrantes () {
    const { id } = useParams();
    const speaker = speakers.find((s) => s.id === Number(id));

    if (!speaker) {
        return (
          <div className="SobrePalestrantes-secao1">
            <h1>Palestrante não encontrado</h1>
          </div>
        );
    }

    return (
        <div>
            <div className="SobrePalestrantes-secao1">
                <h1>Sobre a palestra</h1>
                <p className="SobrePalestrantes-secao1-p">{speaker.palestra}</p>
            </div>

            <div className="SobrePalestrantes-secao2">
                <h4 className="SobrePalestrantes-secao2-h4">Conheça seu palestrante</h4>
            </div>

            <div className="SobrePalestrantes-secao3">
                <CardPalestranteSobre nome={speaker.nome} tema_palestra={speaker.palestra} foto_palestrante={speaker.foto}
                  instagram={speaker.instagram_link} instagram_arroba={speaker.instagram_arroba}
                  linkedin={speaker.linkedin_link} linkedin_arroba={speaker.linkedin_arroba}
                  github={speaker.github_link} github_arroba={speaker.github_arroba}
                />
            </div>
        </div>
    )
}