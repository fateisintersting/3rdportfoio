import About from "./sections/About"
import Hero from "./sections/Hero"
import Navbar from "./sections/Navbar"

function App() {
 
  return (
    <div className='max-w-7xl mx-auto'>
      <Navbar/>
      <Hero />
      <About />
    </div>
  )
      
}

export default App
