
import './App.css'
import Hero from './components/features/hero/Hero'
import Parallax from './components/features/parallax/Parallax'
import Title from './components/features/title/Title'
import parallaxData from './models/parralax.data'
import Slider from './components/features/slider/Slider'
function App() {

  return (
    <div className="App">
      <Hero />
      <Title />
      <Parallax item={parallaxData?.[0]} />
      <Slider />
      <Parallax item={parallaxData?.[1]} />

    </div>
  )
}

export default App
