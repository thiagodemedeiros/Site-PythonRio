import InputFormulario from '../../components/InputFormulario'
import HeaderInscreva from './HeaderInscreva'
import Cta from '../Cta'
import Footer from '../Footer'
import './Inscreva.css'

export default function Inscreva () {
    return (
        <>
        <div className='inscreva-section'>
            <HeaderInscreva/>

            <h4 className='inscreva-section-h4'>Inscreva-se</h4>

            <div className='inscreva-section-formulario'>
                <div className='inscreva-section-formulario-2item'>
                    <InputFormulario textoh4='Nome'/>
                    <InputFormulario textoh4='Sobrenome'/>
                </div>
                <div className='inscreva-section-formulario-2item'>
                    <InputFormulario textoh4='E-mail'/>
                    <InputFormulario textoh4='Celular'/>
                </div>
                <div className='inscreva-section-formulario-2item'>
                    <InputFormulario textoh4='CPF'/>
                    <InputFormulario textoh4='Data de nascimento'/>
                </div>
            </div>
        </div>

        <Cta/>
        <Footer/>
        </>
    )
}