
import './App.css'
import Hero from './components/Hero'
import NavBar from './components/NavBar'
import Projects from './components/Projects'
import Experience from './components/Experience'
import About from './components/About'
import Contact from './components/Contact'

function App() {

  return (
    <>
      <main className='h-[100vh]'>
        <NavBar/>
        <Hero/>
      </main>

      <section className='gray-secondary-bg py-20'>
        <Projects/>
      </section>

      <section className='py-20'>
        <Experience/>
      </section>

      <section className='gray-secondary-bg py-20'>
        <About/>
      </section>
      <section className='gray-secondary-bg py-20'>
        <Contact/>
      </section>
    </>
  )
}

export default App
