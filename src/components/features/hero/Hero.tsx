import Image from "../../ui/images/Image"
import heroImage from "../../../assets/hero.jpg"
import './Hero.scss';

const Hero = () => {
    return (
        <section className="hero" role="banner">
            <div className="hero__image-container">
                <Image
                    src={heroImage}
                    alt="CHANEL luxury watch and jewelry collection"
                    className="hero__image"
                    loading="eager"
                />
            </div>
            <div className="hero__content">
                <h1 className="hero__title">
                    Go to the Moon
                </h1>
            </div>
        </section>
    )
}
export default Hero