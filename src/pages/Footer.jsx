import React from "react";
import './Footer.css'

export default function footer () {
    return (
        <div className="footer">
            <div className="botoes1">
                <a href="/"><h5>PythOnRio</h5></a>
                {/* <a href="/palestrantes"><h5>Palestrantes</h5></a> */}
                <a href="/sobre"><h5>Sobre</h5></a>
                {/* <a href="/inscreva"><h5>Inscreva-se</h5></a> */}
            </div>

            <div className="botoes2">
                <p>
                    Eu não sou designer <br/>
                    Eu não sei o que to fazendo <br/>
                    Se você chegou até aqui <br/>
                    E gostou do que ta vendo <br/>
                    Meu gato te agradece <br/>
                    fim :D
                </p>
            </div>
        </div>
    )
}