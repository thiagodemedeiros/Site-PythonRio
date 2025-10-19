import '../../styles/home/section1.css'
import logo from "../../assets/home/logo_section1_home.png"

export default function Section1() {
    return (
        <>
            <div className='Section1'>
                <img src={logo} alt="Logo da Python On Rio" />
            </div>

            <div className='Section1-aba'>
                <h3>We are so back, mano!</h3>
            </div>
        </>
    )
}