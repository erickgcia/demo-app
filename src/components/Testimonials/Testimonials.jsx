import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { testimonialsData } from '../../constants'
import TestimonialBox from './TestimonialBox'

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1250,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: 'linear',
    pauseOnHover: true,
  }

  return (
    <Slider className="w-3/4 mx-auto py-10 my-20" {...settings}>
      {testimonialsData &&
        testimonialsData.map((testimonial, index) => (
          <TestimonialBox key={index} testimonial={testimonial} />
        ))}
    </Slider>
  )
}

export default Testimonials
