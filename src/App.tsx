
import './App.css'
import Hero from './components/features/hero/Hero'
import Parallax from './components/features/parallax/Parallax'
import Title from './components/features/title/Title'
import parallaxData from './models/parralax.data'

function App() {

  return (
    <div className="App">
      <Hero />
      <Title />
      <Parallax item={parallaxData[0]} />
    </div>
  )
}

export default App
