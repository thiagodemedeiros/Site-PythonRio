import "../../styles/home/section3.css"
import image1 from "../../assets/home/image_section3_linha1.png"
import image2 from "../../assets/home/image_section3_linha2.png"

export default function Section3() {
    return (
        <>
            <div className="Section3">
                <div className="Section3-linha1">
                    <h3>Os melhores palestrantes</h3>
                    <img src={image1} alt="Imagem de um palestrante na Pythonrio" />
                </div>
                <div className="Section3-linha2">
                    <h3>Os melhores conteudos</h3>
                    <img src={image2} alt="Imagem de um palestrante na Pythonrio" />
                </div>
            </div>

            <div className='Section3-aba'>
                <h3>A melhor comunidade</h3>
            </div>
        </>
    )
}