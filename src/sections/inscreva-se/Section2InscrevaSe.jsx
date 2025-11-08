import '../../styles/inscreva-se/Section2InscrevaSe.css'

export default function Section2InscrevaSe() {
    return(<>
        <div className='Section2InscrevaSe'>
            <h4 className='Section2InscrevaSe_h4_1'>Com a participação de:</h4>

            <div className='Section2InscrevaSe_Cards'>
                <h4 className='Section2InscrevaSe_h4_Cards_1'>Para mais informações, clique no palestrante</h4>

                <div className='Section2InscrevaSe_CardPalestrante'>
                    <h4>Nome do palestrante</h4>
                    <img src="https://img.freepik.com/fotos-gratis/gato-alegre-a-divertir-se_23-2151082419.jpg?semt=ais_hybrid&w=740&q=80" alt="" />
                    <h5>Titulo da palestra</h5>
                </div>
                <div className='Section2InscrevaSe_CardPalestrante'>
                    <h4>Nome do palestrante</h4>
                    <img src="https://img.freepik.com/fotos-gratis/gato-alegre-a-divertir-se_23-2151082419.jpg?semt=ais_hybrid&w=740&q=80" alt="" />
                    <h5>Titulo da palestra</h5>
                </div>
                <div className='Section2InscrevaSe_CardPalestrante'>
                    <h4>Nome do palestrante</h4>
                    <img src="https://img.freepik.com/fotos-gratis/gato-alegre-a-divertir-se_23-2151082419.jpg?semt=ais_hybrid&w=740&q=80" alt="" />
                    <h5>Titulo da palestra</h5>
                </div>
            </div>
        </div>
    </>)
}