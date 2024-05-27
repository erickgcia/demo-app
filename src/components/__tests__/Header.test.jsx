// eslint-disable-next-line no-unused-vars
import React from 'react'
import { fireEvent, render } from '@testing-library/react'
import '@testing-library/jest-dom/'
import Header from '../Header/Header.jsx'
import MainButton from '../MainButton.jsx'

describe('Testing for the Header components', () => {
  it('Should render the Header component', () => {
    expect(render(<Header />).getByText('MagicDesign UI')).toBeInTheDocument()
  })
})

describe('Testing for the Main Button Component', () => {
  it('Button should scroll to href on click', () => {
    const { getByText } = render(<MainButton />)
    const button = getByText('Get Started')
    fireEvent.click(button)
    setTimeout(() => {
      expect(window.location.hash).toBe('#pricing')
    }, 1000)
  })
})
