import CardPalestrante from './assets/CardPalestrante'
import './secao2.css'

export default function Secao2 () {
    return (
        <>
            <div className='Secao2-horario'>
                <h5>15:00</h5>
            </div>

            <div className='Secao2-palestrante'>
                <CardPalestrante 
                                    style = {{border: '#1D2F57 solid 3px',
                                                boxShadow: '5px 5px 2px 1px #A983AF, 1px 1px 1px 1px #A983AF'}}
                                    />
            </div>
        </>
    )
}