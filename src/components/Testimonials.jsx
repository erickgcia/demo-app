import Slider from 'react-slick'
import { quotes } from '../assets/icons'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { testimonialsData } from '../constants'

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <Slider className="w-3/4 mx-auto py-10 my-20" {...settings}>
      {testimonialsData &&
        testimonialsData.map((testimonial, index) => (
          <article
            key={index}
            className="container-size t-bg flex flex-col items-center justify-center w-[min(90%,1100px)] mx-auto h-[250px] p-12 border-2 border-white rounded-xl mt-16"
          >
            <div className="relative flex flex-col gap-8">
              <img
                className="absolute top-[-30px] right-[-30px] w-14 z-10 opacity-20"
                src={quotes}
                alt="Quotation mark icon"
              />
              <p className="text-xl text-center font-medium text-white z-20 text-balance">
                {testimonial.text}
              </p>
              <div className="flex items-center justify-center gap-4">
                <img
                  className="rounded-full w-12 aspect-square"
                  src={testimonial.image}
                  alt={testimonial.name}
                />
                <div className="flex flex-col">
                  <strong className="font-semibold text-white">
                    {testimonial.name}
                  </strong>
                  <span className="text-gray-300">{testimonial.position}</span>
                </div>
              </div>
            </div>
          </article>
        ))}
    </Slider>
  )
}

export default Testimonials
