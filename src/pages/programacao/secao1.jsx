import CardPalestrante from './assets/CardPalestrante'
import './secao1.css'

export default function Secao1 () {
    return (
        <>
            <div className='Secao1-horario'>
                <h4>Programação</h4>
                <h5>14:00</h5>
            </div>

            <div className='Secao1-palestrante'>
                <CardPalestrante 
                    style = {{border: '#1D2F57 solid 3px',
                                boxShadow: '5px 5px 2px 1px #A983AF, 1px 1px 1px 1px #A983AF'}}
                    />
            </div>
        </>
    )
}