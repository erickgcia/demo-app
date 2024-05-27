import { navList } from '../constants'
import MainButton from './MainButton'

const Nav = () => {
  return (
    <nav className="fixed z-30 bottom-10 left-1/2 right-1/2 w-3/4 sm:w-max translate-x-[-50%] py-3 px-5 rounded-2xl bg-white flex items-center justify-center gap-2 md:gap-8 shadow-md">
      <ul className="flex gap-2 md:gap-6 text-sm md:text-base">
        {navList &&
          navList.map((item, index) => (
            <li key={index} className="font-semibold">
              {item}
            </li>
          ))}
      </ul>
      <MainButton size="md" color="black-500" textClr="white" />
    </nav>
  )
}

export default Nav
