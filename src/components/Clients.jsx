import PropTypes from 'prop-types'

const Clients = ({ icons }) => {
  return (
    <article className="container-size flex flex-col items-center justify-center gap-12 p-8 w-full">
      <span className="font-medium text-2xl text-balance">
        Trusted by companies worldwide
      </span>
      <div className="flex flex-wrap items-center justify-center gap-6 container-size border-dotted border-b-2 border-gray-400 pb-8">
        {icons &&
          icons.map((icon, index) => (
            <img
              className="g-logo w-[100px]"
              key={index}
              src={icon}
              alt={`${icon} icon`}
            />
          ))}
      </div>
    </article>
  )
}

Clients.propTypes = {
  icons: PropTypes.array,
}

export default Clients
