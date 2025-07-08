import CardPalestrante from './assets/CardPalestrante'
import './secao3.css'

export default function Secao2 () {
    return (
        <>
            <div className='Secao3-horario'>
                <h5>16:00</h5>
            </div>

            <div className='Secao3-palestrante'>
                <CardPalestrante 
                                    style = {{border: '#1D2F57 solid 3px',
                                                boxShadow: '5px 5px 2px 1px #A983AF, 1px 1px 1px 1px #A983AF'}}
                                    />
            </div>
        </>
    )
}