import Button from '../../components/Button';
import './HeaderInscreva.css';

export default function HeaderInscreva () {
    return (
        <>
        <div className='HeaderInscreva'>
            <div className='header-logo'>
                <a href="/"><img src='logo.png' alt="" /></a>
            </div>

            <div className="header-botoes">
                <div className="header-botoes-outros">
                    <a href="/sobre"><Button texto='Sobre' background='#FCFCFA' backgroundTexto='#48517C' width='160px' height="28px" fontsize="18px" padding='0'/></a>
                    <a href="/palestrantes"><Button texto='Palestrantes' background='#FCFCFA' backgroundTexto='#48517C' width='160px' height="28px" fontsize="18px" padding='0'/></a>
                    <a href=""><Button texto='Programação' background='#FCFCFA' backgroundTexto='#48517C' width='160px' height="28px" fontsize="18px" padding='0'/></a>
                </div>
            </div>

            <div className="header-botoes-mobile">
                <div className="header-botoes-outros">
                    <a href="/sobre"><Button texto='Sobre' background='#FCFCFA' backgroundTexto='#48517C' width='160px' height="24px" fontsize="16px" padding='0'/></a>
                    <a href=""><Button texto='Palestrantes' background='#FCFCFA' backgroundTexto='#48517C' width='160px' height="24px" fontsize="16px" padding='0'/></a>
                    <a href=""><Button texto='Programação' background='#FCFCFA' backgroundTexto='#48517C' width='160px' height="24px" fontsize="16px" padding='0'/></a>
                </div>
            </div>
        </div>
        </>
    )
}