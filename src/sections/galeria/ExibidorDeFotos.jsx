import { supabase } from "../../SupabaseClient"
import { useEffect , useState } from "react"
import "../../styles/galeria/section1Galeria.css"

export default function ExibidorDeFotos({indexGalerie}) {
    const [ allPhotos, setAllPhotos ] = useState()

    async function pegarImagens() {
        const { data , error } = await supabase
                                    .from("galerie")
                                    .select("*")
        if (error) {
            console.error(`error: ${error}`)
            return
        }
        setAllPhotos(data[indexGalerie].event_photos.img_link)
    }

    useEffect(() => {
        if (!allPhotos)
            pegarImagens()
    }, [])

    console.log(allPhotos)

    return(
        <div className="exibidorDeFotos">
            { allPhotos && allPhotos.map((photo , index) => (
                <div key={index} className="pequenoExibidorDeFotos">
                    <img
                        src={photo}
                        alt="Foto"
                    />
                    <h4>{photo}</h4>
                </div>
            ))}
        </div>
    )
}