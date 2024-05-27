import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Header from '../Header/Header.jsx'

describe('Header component', () => {
  it('should render the Header component', () => {
    const { getByText } = render(<Header />)
    expect(getByText('MagicDesign UI')).toBeInTheDocument()
  })
})
