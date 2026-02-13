import parallaxData from "../../models/parralax.data"
import Hero from "../features/hero/Hero"
import Parallax from "../features/parallax/Parallax"
import Slider from "../features/slider/Slider"
import Title from "../features/title/Title"
import Link from "../ui/links/Link"
import './homepage.scss'

const HomePage = () => {
    return (
        <>
            <Hero />
            <Title title="Over the Moon" description="Quatre inconnus se recontrent dans un ascenseur pour la ligne" />
            <Parallax item={parallaxData?.[0]} />
            <Slider />
            <Link href="/shop" className="homepage__link">Découvrir la collection</Link>
            <Parallax item={parallaxData?.[1]} />
            <Title title="Over the Moon" description="Quatre inconnus se recontrent dans un ascenseur pour la ligne" />
            <Link href="/shop" className="homepage__link">Découvrir la collection</Link>


        </>
    )
}
export default HomePage