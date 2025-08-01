import { useState } from 'react'
import InputFormulario from '../../components/InputFormulario'
import HeaderInscreva from './HeaderInscreva'
import Cta from '../Cta'
import Footer from '../Footer'
import './Inscreva.css'

export default function Inscreva () {

    const [formData, setFormData] = useState ({
        nome:'',
        sobrenome:'',
        email:'',
        celular:'',
        cpf:'',
        data_de_nascimento:''
    })

    function handleChange(e) {
        const {name,value} = e.target
        setFormData(prev => ({ ...prev , [name]: value}))
    }

    async function handleSubmit(e) {
        e.preventDefault()

        try {
            const response = await fetch('API RETIRADA', {
                method:'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(formData)
            })

            const data = await response.json()
            alert(`Usuário criado com ID: ${data.id}`)

            setFormData ({
                nome:'',
                sobrenome:'',
                email:'',
                celular:'',
                cpf:'',
                data_de_nascimento:''
            })

            
    } catch (error) {
        alert('Erro ao enviar dados: ' + error.message)
    }}

    return (
        <>
        <div className='inscreva-section'>
            <HeaderInscreva/>

            <h4 className='inscreva-section-h4'>Inscreva-se</h4>

            <div className='inscreva-section-formulario'>
                {/* <div className='inscreva-section-formulario-2item'> */}
                    {/* <InputFormulario textoh4='Nome' name='nome' value={formData.nome} onChange={handleChange}/> */}
                    {/* <InputFormulario textoh4='Sobrenome' name='sobrenome' value={formData.sobrenome} onChange={handleChange}/> */}
                {/* </div> */}
                {/* <div className='inscreva-section-formulario-2item'> */}
                    {/* <InputFormulario textoh4='E-mail' name='email' value={formData.email} onChange={handleChange}/> */}
                    {/* <InputFormulario textoh4='Celular' name='celular' value={formData.celular} onChange={handleChange}/> */}
                {/* </div> */}
                {/* <div className='inscreva-section-formulario-2item'> */}
                    {/* <InputFormulario textoh4='CPF' name='cpf' value={formData.cpf} onChange={handleChange}/> */}
                    {/* <InputFormulario textoh4='Data de nascimento' name='data_de_nascimento' value={formData.data_de_nascimento} onChange={handleChange}/> */}
                {/* </div> */}
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSdTWAcFjf3h5AKKC9ouubRZ8EhYB6ThczSqKQPtkJmWTCl9Ng/viewform"><button type='submit'>Acesse o fomulário e inscreva-se</button></a>
            </div>
        </div>

        <Cta/>
        <Footer/>
        </>
    )
}