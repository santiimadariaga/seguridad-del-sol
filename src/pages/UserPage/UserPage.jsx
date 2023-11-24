import React from 'react'
import Navbar from '../../components/NavBar/Navbar'
import Footer from '../../components/Footer/Footer'
import Wpp from '../../components/Whatsapp/Wpp'
import Mantenimiento from '../../components/Mantenimiento/Mantenimiento'

const UserPage = () => {

  return (
    <>
      <Navbar />
      <Mantenimiento />
      <Footer />
      <Wpp />
    </>
  )
}

export default UserPage