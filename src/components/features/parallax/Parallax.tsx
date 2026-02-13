import { useEffect, useRef } from "react"
import "./parallax.scss"
import type { ParallaxData } from "../../../types/parrallax.type"

const lerp = (a: number, b: number, t: number) => a + (b - a) * t
const clamp = (v: number, min: number, max: number) => Math.min(Math.max(v, min), max)

const Parallax = ({ item }: { item: ParallaxData }) => {
    const wrapper = useRef<HTMLDivElement>(null)
    const current = useRef(0.8)
    const target = useRef(0.8)
    const raf = useRef(0)

    useEffect(() => {
        const tick = () => {
            if (!wrapper.current) return

            current.current = lerp(current.current, target.current, 0.06)
            const pct = current.current * 100
            wrapper.current.style.clipPath = `inset(${100 - pct}% 0 0 0)`

            if (Math.abs(current.current - target.current) > 0.001) {
                raf.current = requestAnimationFrame(tick)
            }
        }

        const onScroll = () => {
            if (!wrapper.current) return

            const rect = wrapper.current.getBoundingClientRect()
            const wh = window.innerHeight
            const raw = (wh - rect.top) / (wh * 0.6)

            target.current = 0.8 + clamp(raw, 0, 1) * 0.2

            cancelAnimationFrame(raf.current)
            raf.current = requestAnimationFrame(tick)
        }

        window.addEventListener("scroll", onScroll, { passive: true })
        window.addEventListener("resize", onScroll, { passive: true })
        onScroll()

        return () => {
            window.removeEventListener("scroll", onScroll)
            window.removeEventListener("resize", onScroll)
            cancelAnimationFrame(raf.current)
        }
    }, [])

    return (
        <section className="parallax">
            <div className="parallax__container">
                <div className="parallax__item">
                    <div className="parallax__image-wrapper" ref={wrapper}>
                        <picture>
                            <source media="(max-width: 768px)" srcSet={item.images.imageMobile} />
                            <img
                                src={item.images.imageDesktop}
                                alt={item.alt}
                                className="parallax__image"
                                loading="lazy"
                            />
                        </picture>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Parallax