import { render } from '@testing-library/react'
import Navbar from './index'

jest.mock('next/router', () => {
  return {
    ...jest.requireActual('next/router'),
    useRouter() {
      return {
        locale: 'en-US',
        locales: ['en-US', 'es-AR', 'pt-BR'],
        asPath: '',
      }
    },
  }
})
describe('Navbar', () => {
  it('It should render all browser elements according to the selected language', () => {
    render(<Navbar />)
  })
})

// describe('Navbar', () => {
//   it('should redirect to the correct page when a link is clicked', () => {
//     render(<Navbar />)

//     fireEvent.click(screen.getByText('home'))
//     expect(useRouter().push).toHaveBeenCalledWith('/')

// fireEvent.click(screen.getByText('Servicios'))
// expect(mockPush).toHaveBeenCalledWith('/services')

// fireEvent.click(screen.getByText('Contacto'))
// expect(mockPush).toHaveBeenCalledWith('/contact')

// fireEvent.click(screen.getByText('Acerca de Nosotros'))
// expect(mockPush).toHaveBeenCalledWith('/about')
//   })
// })
