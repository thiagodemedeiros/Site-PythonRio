import "../styles/PaginaDoPalestrante/PaginaDoPalestrante.css"
import img from '../../public/speakers_photos/foto_madu.jpg'

export default function PaginaDoPalestrante() {
    return (<>
        <div className="PaginaDoPalestrante">
            <div className="PaginaDoPalestrante_card">
                <div className="PaginaDoPalestrante_card_titulo">
                    <img src={img} alt="Foto do Palestrante" />
                    <div className="PaginaDoPalestrante_card_titulo_texto">
                        <h4>Madu Marcondes</h4>
                        <h5>Python aplicado à IA e automações inteligentes</h5>
                        <p>Esta palestra abordará a resolução de problemas de otimização utilizando programação linear. Será demonstrado como essa técnica, amplamente aplicada na indústria, pode otimizar processos e decisões. Veremos como implementar soluções por meio da biblioteca HiGHS, uma ferramenta open source para otimização.</p>
                    </div>
                </div>

                <div className="PaginaDoPalestrante_card_links">
                    <a href="">
                        <div className="PaginaDoPalestrante_card_links_item">
                            <img src="" alt="Logo do GitHub" />
                            <h6>/GitHub</h6>
                        </div>
                    </a>

                    <a href="">
                        <div className="PaginaDoPalestrante_card_links_item">
                            <img src="" alt="Logo do Instagran" />
                            <h6>/Instagran</h6>
                        </div>
                    </a>

                    <a href="">
                        <div className="PaginaDoPalestrante_card_links_item">
                            <img src="" alt="Logo do Linkdin" />
                            <h6>/Linkdin</h6>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </>)
}