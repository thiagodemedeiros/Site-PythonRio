import { useState , useEffect } from "react"
import "./criarGaleria.css"
import { useAtom } from "jotai"
import { imageInGaleries } from "./AtomsGaleria"

export default function EncapsuladorDeImagens() {
    const [ image , setImage ] = useState("")
    const [ imageList , setImageList] = useAtom(imageInGaleries)

    const addImage = (url) => {
        if (url == "") {
            return
        };
        setImageList(prev => [...prev, url]);
        setImage("");
    };

    const removeImage = (index) => {
        setImageList(prev => prev.filter((_, i) => i !== index));
    };

    useEffect (() => (
        console.log(imageList)
    ), [imageList])

    return(
    <div className="EncapsuladorDeImagens">
        <h3>Adicionar link da imagem:</h3>
        <input type="text" value={image} onChange={(e) => (setImage(e.target.value))}/>
        <button onClick={() => (addImage(image))}>Adicionar Imagem</button>
        {imageList && imageList.map((url , index) => (
            <div key={index} className="EncapsuladorDeImagens_item">
                <h4>{url}</h4>
                <button onClick={() => (removeImage(index))}>Remover</button>
            </div>
        ))}
    </div>
    )
}