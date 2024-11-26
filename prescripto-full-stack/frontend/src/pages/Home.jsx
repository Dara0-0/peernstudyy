import React from 'react'
import Header from '../components/Header'
import SpecialityMenu from '../components/SpecialityMenu'
import Banner from '../components/Banner'
import Skills from '../components/Skills'

const Home = () => {
  return (
    <div>
      <Header />
      <SpecialityMenu />
      <Skills />
      <Banner />
    </div>
  )
}

export default Home