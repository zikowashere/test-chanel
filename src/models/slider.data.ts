import slider1 from '../assets/slider-1.jpg'
import slider2 from '../assets/slider-2.jpg'
import type { Slide } from '../types/slide.type'

export const slides: Slide[] = [
    {
        id: 1,
        image: slider1,
        title: 'Première Collection',
        description: 'Discover the iconic Première watch collection, inspired by the octagonal shape of Place Vendôme.',
    },
    {
        id: 2,
        image: slider2,
        title: 'J12 Collection',
        description: 'Experience the timeless elegance of the J12 collection, where haute horlogerie meets haute couture.',
    },
]