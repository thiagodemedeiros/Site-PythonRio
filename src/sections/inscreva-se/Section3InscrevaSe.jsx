import '../../styles/inscreva-se/Section3InscrevaSe.css'

export default function Section3InscrevaSe() {
    return (
        <div className="Section3InscrevaSe">
            <div className='Section3InscrevaSe_titulo'>
                <h3>Localizado no:</h3>
            </div>

            <iframe className='Section3InscrevaSe_mapa'
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.502848924211!2d-43.294111099999995!3d-22.894816499999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997d06172dd4cf%3A0x169e5900848ccc97!2sR.%20Arquias%20Cordeiro%2C%201516%20-%20Engenho%20de%20Dentro%2C%20Rio%20de%20Janeiro%20-%20RJ%2C%2020770-001!5e0!3m2!1spt-BR!2sbr!4v1775511806215!5m2!1spt-BR!2sbr"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
    )
}