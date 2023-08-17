import React from 'react'
import Hero from '../components/Hero'
import Portfolio from '../components/Portfolio'

const work = () => {
  return (
    <div>
        <Hero heading='Meus Trabalhos' message='Projetos recentes' />
        <Portfolio />
    </div>
  )
}

export default work