import './Section5.css'

export default function Section5() {
    return (
        <div className="section5">
            <div className="section5-texto">
                <h3>Confira onde será o retorno da PythOnRio</h3>
            </div>

            <div className="section5-mapa">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1837.5684442868107!2d-43.19518201236448!3d-22.908321277555252!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997f132ba32ea1%3A0xe5e79c44f1922356!2sEditora%20Globo!5e0!3m2!1spt-BR!2sbr!4v1755040996299!5m2!1spt-BR!2sbr"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Mapa"
                ></iframe>
            </div>
        </div>
    );
}
