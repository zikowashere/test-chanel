import parallaxData from "../../models/parralax.data"
import Hero from "../features/hero/Hero"
import Parallax from "../features/parallax/Parallax"
import Slider from "../features/slider/Slider"
import Title from "../features/title/Title"
import Button from "../ui/buttons/Button"
import './homepage.scss'

const HomePage = () => {
    return (
        <>
            <Hero />
            <Title title="Over the Moon" description="Quatre inconnus se recontrent dans un ascenseur pour la ligne" />
            <Parallax item={parallaxData?.[0]} />
            <Slider />
            <Button href="/shop" variant="outline">Découvrir la collection</Button>
            <Parallax item={parallaxData?.[1]} />
            <Title title="Over the Moon" description="Quatre inconnus se recontrent dans un ascenseur pour la ligne" />
            <Button href="/shop" variant="outline">Découvrir la collection</Button>

            <div className="homepage__footer">
            </div>

        </>
    )
}
export default HomePage