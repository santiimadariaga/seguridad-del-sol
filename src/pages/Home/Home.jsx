import React from 'react'
import Navbar from '../../components/NavBar/Navbar'
import Footer from '../../components/Footer/Footer'
import Hero from '../../components/Hero/Hero'
import Productos from '../../components/Productos/Productos'
import Recargas from '../../components/Recargas/Recargas'
import Wpp from '../../components/Whatsapp/Wpp'

const Home = () => {

  return (
    <>
      <Navbar />
      <Hero />
      <Productos />
      <Recargas />
      <Footer />
      <Wpp />
    </>
  )
}

export default Home