import { useState } from "react";
import GalerieConfigData from "../../../../data/GalerieConfig.yaml?raw";
import "./sections/section1Galeria.css"
import { parse } from "yaml";

const GalerieConfig = parse(GalerieConfigData).GalerieConfig;

export default function ExibidorDeFotos({allPhotos}) {
    const [ selectedPhoto , setSelectedPhoto ] = useState();
    
    return(
        <div className="exibidorDeFotos">
            { allPhotos && allPhotos.map((photo , index) => (
                <div key={index} className="pequenoExibidorDeFotos">
                    <img
                        src={photo}
                        alt="Foto"
                        onClick={() => setSelectedPhoto(photo)}
                    />
                </div>
            ))}

            {selectedPhoto && (
                <ModalExibirFotoSelecionada
                    selectedPhoto={selectedPhoto}
                    closePhoto={() => setSelectedPhoto(null)}
                />
            )}
        </div>
    )
}

function ModalExibirFotoSelecionada({selectedPhoto, closePhoto}) {
    return(
        <div className="ModalExibirFotoSelecionada" onClick={closePhoto}>
            <img src={selectedPhoto} alt="Foto Selecionada" />
        </div>
    )
}