import Button from '../components/Button.jsx'
import { Outlet } from 'react-router-dom';
import './Header.css';

export default function Header () {
    return (
        <>
        <div className='header'>
            <div className='header-logo'>
                <a href="/"><img src='logo.png' alt="" /></a>
            </div>

            <div className="header-botoes">
                <div className="header-botoes-outros">
                    <a href="/sobre"><Button texto='Sobre' background='#FCFCFA' backgroundTexto='#48517C' width='160px' height="28px" fontsize="18px" padding='0'/></a>
                    <a href="/palestrantes"><Button texto='Palestrantes' background='#FCFCFA' backgroundTexto='#48517C' width='160px' height="28px" fontsize="18px" padding='0'/></a>
                    <a href="/programacao"><Button texto='Programação' background='#FCFCFA' backgroundTexto='#48517C' width='160px' height="28px" fontsize="18px" padding='0'/></a>
                </div>
                <div className="header-botoes-inscreva">
                    <a href="/inscreva"><Button texto='INSCREVA-SE' background='#48517C' backgroundTexto='#FCFCFA' width='210px' height="40px" fontsize="22px" padding='0'/></a>
                </div>
            </div>

            <div className="header-botoes-mobile">
                <div className="header-botoes-outros">
                    <a href="/sobre"><Button texto='Sobre' background='#FCFCFA' backgroundTexto='#48517C' width='160px' height="24px" fontsize="16px" padding='0'/></a>
                    <a href="/palestrantes"><Button texto='Palestrantes' background='#FCFCFA' backgroundTexto='#48517C' width='160px' height="24px" fontsize="16px" padding='0'/></a>
                    <a href=""><Button texto='Programação' background='#FCFCFA' backgroundTexto='#48517C' width='160px' height="24px" fontsize="16px" padding='0'/></a>
                </div>
                <div className="header-botoes-inscreva">
                    <a href="/inscreva"><Button texto='INSCREVA-SE' background='#48517C' backgroundTexto='#FCFCFA' width='210px' height="34px" fontsize="20px" padding='0'/></a>
                </div>
            </div>
        </div>
        </>
    )
}