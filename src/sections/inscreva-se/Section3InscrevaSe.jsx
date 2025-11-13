import '../../styles/inscreva-se/Section3InscrevaSe.css'

export default function Section3InscrevaSe() {
    return (
        <div className="Section3InscrevaSe">
            <h3>Localização</h3>

            <iframe className='Section3InscrevaSe_mapa'
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3674.970812011116!2d-43.166391000000004!3d-22.914447400000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9981881d234bf1%3A0x7cb93b6b217c56b!2sWeWork%20Sala%20Comercial%20%26%20Coworking!5e0!3m2!1spt-BR!2sbr!4v1763075420907!5m2!1spt-BR!2sbr"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
    )
}