import type { ParallaxData } from "../types/parrallax.type"
import giedreDesktop from "../assets/giedre.jpg"
import giedreMobile from "../assets/giedre-mobile.jpg"
import imariDesktop from "../assets/imari.jpg"
import imariMobile from "../assets/imari-mobile.jpg"

const parallaxData: ParallaxData[] = [
    {
        id: 1,
        images: { imageMobile: giedreMobile, imageDesktop: giedreDesktop },
        alt: "Model wearing CHANEL jewelry and watch",
        speed: 0.2,
    },
    {
        id: 2,
        images: { imageMobile: imariMobile, imageDesktop: imariDesktop },
        alt: "Model showcasing CHANEL earrings",
        speed: 0.5,
    },
]
export default parallaxData