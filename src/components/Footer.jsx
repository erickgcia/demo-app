import { socialLinks } from '../assets/icons'
import { navList } from '../constants'

const Footer = () => {
  return (
    <footer className="f-bg z-40">
      <article className="grid [grid-template-rows: 2fr 1fr] container-size">
        <section className="row-span-1 h-[250px] flex flex-col md:flex-row justify-between px-8">
          <div className="md:w-1/2">
            <span className="block font-bold text-xl mb-4">MagicDesign UI</span>
            <p className="font-medium text-balance">
              MagicDesign UI unique website designs with unlimited revisions at
              a flat fee.
            </p>
          </div>
          <div className="md:w-[100px]">
            <ul className="flex flex-wrap gap-4">
              {navList &&
                navList.map((item, index) => (
                  <li
                    className="font-semibold text-sm md:text-base"
                    key={index}
                  >
                    {item}
                  </li>
                ))}
            </ul>
          </div>
        </section>
        <section className="row-span-1 flex flex-col sm:flex-row items-center justify-between pt-8 px-8">
          <span className="text-gray-500 text-sm font-medium">
            2024 MagicDesign UI
          </span>
          <div className="flex gap-2 md:pr-3">
            {socialLinks &&
              socialLinks.map((socialIcon, index) => (
                <img
                  key={index}
                  className="w-6"
                  src={socialIcon}
                  alt={`${socialIcon} icon`}
                />
              ))}
          </div>
        </section>
      </article>
    </footer>
  )
}

export default Footer
