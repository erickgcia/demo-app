import PropTypes from 'prop-types'
// eslint-disable-next-line no-unused-vars
import React from 'react'

const MainButton = ({ size, color, textClr }) => {
  return (
    <a href="#pricing">
      <button
        className={`btn bg-${color} hidden sm:block md:text-${size} font-bold text-${textClr}`}
      >
        Get Started
      </button>
    </a>
  )
}

MainButton.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
  textClr: PropTypes.string,
}

export default MainButton
