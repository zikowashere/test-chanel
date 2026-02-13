import { useState, useEffect, useRef } from 'react'
import './slider.scss'
import { slides } from '../../../models/slider.data'
import Image from '../../ui/images/Image'




const Slider = () => {
    const [active, setActive] = useState(0)
    const [locked, setLocked] = useState(false)
    const timer = useRef<number>(0)

    const go = (index: number) => {
        if (locked || index === active) return
        setLocked(true)
        setActive(index)
        setTimeout(() => setLocked(false), 500)
    }

    const next = () => go((active + 1) % slides.length)
    const prev = () => go((active - 1 + slides.length) % slides.length)

    useEffect(() => {
        timer.current = window.setInterval(next, 5000)
        return () => clearInterval(timer.current)
    })

    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if (e.key === 'ArrowLeft') prev()
            if (e.key === 'ArrowRight') next()
        }
        window.addEventListener('keydown', onKey)
        return () => window.removeEventListener('keydown', onKey)
    })

    return (
        <section className="slider">
            <div className="slider__container">
                <div className="slider__track">
                    {slides.map((slide, i) => (
                        <div
                            key={slide.id}
                            className={`slider__slide ${i === active ? 'slider__slide--active' : ''}`}
                        >
                            <div className="slider__content">
                                <h2 className="slider__title">{slide.title}</h2>
                                <p className="slider__description">{slide.description}</p>
                                <a href="#explore" className="slider__link">Découvrez</a>
                            </div>
                            <div className="slider__image-wrapper">
                                <Image src={slide.image} alt={slide.title} className="slider__image" />
                            </div>
                        </div>
                    ))}
                </div>

                <button className="slider__arrow slider__arrow--prev" onClick={prev} disabled={locked}>
                    <span className="slider__arrow-icon slider__arrow-icon--prev" />
                </button>
                <button className="slider__arrow slider__arrow--next" onClick={next} disabled={locked}>
                    <span className="slider__arrow-icon slider__arrow-icon--next" />
                </button>

                <div className="slider__pagination">
                    {slides.map((_, i) => (
                        i === active ? <p key={i} className="slider__pagination-item">{i + 1}/2</p> : null
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Slider
