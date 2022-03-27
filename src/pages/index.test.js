import { render, screen } from '@testing-library/react'
import HomePage from './index'

const makeSut = () => {
  return render(<HomePage />)
}

describe('pages/index', () => {
  describe('when page render', () => {
    beforeEach(() => {
      makeSut()
    })

    it('displays the title', () => {
      expect(screen.getByText('Next Boilerplate')).toBeInTheDocument()
    })
  })
})
