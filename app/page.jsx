import Image from 'next/image'
import Header from './components/Header'
import About from './components/About'
import Explore from './components/Explore'
import Highlights from './components/Highlights'
import Packages from './components/Packages'
import Contact from './components/Contact'

export default function Home() {
  return (
    <main >
      <Header />
      <About />
      <Explore />
      <Highlights />
      <Packages />
      <Contact />
    </main>
  )
}
