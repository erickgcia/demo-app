import PropTypes from 'prop-types'
import { quotes } from '../../assets/icons'

const TestimonialBox = ({ testimonial }) => {
  const { text, image, name, position } = testimonial
  return (
    <article className="container-size t-bg flex flex-col items-center justify-center w-[min(90%,1100px)] mx-auto h-full md:h-[250px] p-12 border-2 border-white rounded-xl mt-16">
      <div className="relative flex flex-col gap-8">
        <img
          className="absolute top-[-30px] right-[-30px] w-14 z-10 opacity-20"
          src={quotes}
          alt="Quotation mark icon"
        />
        <p className="text-xl text-center font-medium text-white z-20 text-balance">
          {text}
        </p>
        <div className="flex items-center justify-center gap-4">
          <img
            className="rounded-full w-[4.5rem] aspect-square"
            src={image}
            alt={name}
          />
          <div className="flex flex-col">
            <strong className="font-semibold text-white">{name}</strong>
            <span className="text-gray-300">{position}</span>
          </div>
        </div>
      </div>
    </article>
  )
}

TestimonialBox.propTypes = {
  testimonial: PropTypes.object,
}

export default TestimonialBox
