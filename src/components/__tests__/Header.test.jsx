// eslint-disable-next-line no-unused-vars
import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/'
import Header from '../Header/Header.jsx'
import MainButton from '../MainButton.jsx'

describe('Header component tests', () => {
  it('Should render the Header component', () => {
    render(<Header />)
    const title = screen.getByText('MagicDesign UI')
    expect(title).toBeInTheDocument()
  })
})

describe('MainButton component test', () => {
  it('Button should scroll to href on click', () => {
    render(<MainButton />)
    const button = screen.getByText('Get Started')
    fireEvent.click(button)
    setTimeout(() => {
      expect(window.location.hash).toBe('#pricing')
    }, 1000)
  })
})
