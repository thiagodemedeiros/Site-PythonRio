import ExibidorDeFotos from "../ExibidorDeFotos"
import GalerieConfigData from "../../../../../data/GalerieConfig.yaml?raw";
import ExibirDadosDoEvento from "../ExibirDadosDoEvento"
import { parse } from "yaml";
import "./section1Galeria.css"

const GalerieConfig = parse(GalerieConfigData).GalerieConfig;

export default function Section1Galeria() {
    
    return(<div className="Section1Galeria">
        <div className="Galeria">
        {GalerieConfig && GalerieConfig.map((Galerie , index) => (
            <div 
                id={Galerie.id}
                className="ItemGaleria"
            >
                <ExibirDadosDoEvento
                    description={Galerie.event_name}
                    name={Galerie.event_description}
                />
                <ExibidorDeFotos
                    allPhotos={Galerie.event_photos}
                />
            </div>
        ))}
        </div>
    </div>)
}