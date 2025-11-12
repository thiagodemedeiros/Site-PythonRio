import '../styles/components/CardPalestrante.css'

const imgDefault = 'https://img.freepik.com/fotos-gratis/gato-alegre-a-divertir-se_23-2151082419.jpg?semt=ais_hybrid&w=740&q=80'

export default function CardPalestrante({NomeDoPalestrante = 'Nome do Palestrante',
                                        FotoDoPalestrante = imgDefault,
                                        TituloDaPalestra = 'Titulo da Palestra',
                                        LinkPaginaDoPalestrante = "/PaginaDoPalestrante"
}) {
    return ( <>
        <a href={LinkPaginaDoPalestrante}>
            <div className='CardPalestrante'>
                <h4>{NomeDoPalestrante}</h4>
                <img src={FotoDoPalestrante} alt="Foto do Palestrante" />
                <h5>{TituloDaPalestra}</h5>
            </div>
        </a>
    </> )
}