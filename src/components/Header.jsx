import Hero from './Hero'

const Header = () => {
  return (
    <header className="h-bg flex flex-col items-center justify-center p-8 w-full">
      <h1 className="text-xl font-semibold pb-8">MagicDesign UI</h1>
      <Hero />
    </header>
  )
}

export default Header
