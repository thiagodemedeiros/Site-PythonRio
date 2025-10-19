import '../../styles/home/section2.css'
import image from '../../assets/home/image_section2.png'

export default function Section2() {
    return (
        <>
            <div className='Section2'>
                <img src={image} alt="Foto dos participantes reunidos no ultimo evento da python on rio" />
                <p>A nossa volta aconteceu
                    e ninguém consegue explicar
                    tudo que a gente viveu</p>
            </div>

            <div className='Section2-aba'>
                <h3>E tudo isso graças a vocês!</h3>
            </div>
        </>
    )
}