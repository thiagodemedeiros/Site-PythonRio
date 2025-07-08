import CardPalestrante from './assets/CardPalestrante'
import './secao4.css'

export default function Secao2 () {
    return (
        <>
            <div className='Secao4-horario'>
                <h5>17:00</h5>
            </div>

            <div className='Secao4-palestrante'>
                <CardPalestrante 
                                    style = {{border: '#1D2F57 solid 3px',
                                                boxShadow: '5px 5px 2px 1px #A983AF, 1px 1px 1px 1px #A983AF'}}
                                    />
            </div>
        </>
    )
}