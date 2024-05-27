import Hero from './Hero'
// eslint-disable-next-line no-unused-vars
import React from 'react'

const Header = () => {
  return (
    <header className="h-bg flex flex-col items-center justify-center p-8 w-full">
      <h1 className="text-xl font-bold pb-8">MagicDesign UI</h1>
      <Hero />
    </header>
  )
}

export default Header
