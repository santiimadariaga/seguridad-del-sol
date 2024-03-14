import React from 'react'
import Navbar from '../../components/NavBar/Navbar'
import Footer from '../../components/Footer/Footer'
import Hero from '../../components/Hero/Hero'
import Productos from '../../components/Productos/Productos'
import Wpp from '../../components/Whatsapp/Wpp'
import Contact from '../../components/Contact/Contact'

const Home = () => {

  return (
    <>
      <Navbar />
      <Hero />
      <Productos />
      {/* modal whatsapp llamada a recarga / modal instagram */}
      {/*ambos en una seccion dos partes */}
      <Contact />
      <Footer />
      <Wpp />
    </>
  )
}

export default Home