import CardPalestrante from '../../components/CardPalestrante'
import '../../styles/inscreva-se/Section2InscrevaSe.css'

export default function Section2InscrevaSe() {
    return(<>
        <div className='Section2InscrevaSe'>
            <h4 className='Section2InscrevaSe_h4_1'>Com a participação de:</h4>

            <div className='Section2InscrevaSe_Cards'>
                <h4 className='Section2InscrevaSe_h4_Cards_1'>Para mais informações, clique no palestrante</h4>

                <div className='Section2InscrevaSe_Cards_Wrap'>
                    <CardPalestrante/>
                    <CardPalestrante/>
                    <CardPalestrante/>
                </div>
            </div>
        </div>
    </>)
}