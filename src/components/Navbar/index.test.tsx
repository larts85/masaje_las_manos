import { render, screen, fireEvent } from '@testing-library/react'
import { useRouter } from 'next/router'
import useTranslations from '@/hooks/useTranslations'

// Mock del useRouter para simular la redirección de enlaces
jest.mock('../../hooks/useTranslations')
jest.mock('next/router', () => ({
  __esModule: true,
  useRouter: () => ({
    push: jest.fn(), // Mock la función push del useRouter
    locale: 'es', // Define el idioma que quieres usar para las pruebas
    locales: ['es', 'en'], // Define los idiomas disponibles
  }),
}))
// Importa el componente Navbar para probarlo
import Navbar from './index'

describe('Navbar', () => {
  it('redirige a la página correcta cuando se hace clic en un enlace', () => {
    const mockTranslations = {
      translations: {
        navLinks: {
          home: 'home',
          services: 'services',
          contact: 'contact',
          about: 'about',
        },
      },
    }
    useTranslations.mockReturnValue(mockTranslations)

    // Renderiza el componente Navbar
    render(<Navbar />)

    // Haz clic en un enlace y verifica que se haya llamado a la función push del useRouter con la URL correcta
    fireEvent.click(screen.getByText('Inicio'))
    expect(useRouter().push).toHaveBeenCalledWith('/')

    // fireEvent.click(screen.getByText('Servicios'))
    // expect(mockPush).toHaveBeenCalledWith('/services')

    // fireEvent.click(screen.getByText('Contacto'))
    // expect(mockPush).toHaveBeenCalledWith('/contact')

    // fireEvent.click(screen.getByText('Acerca de Nosotros'))
    // expect(mockPush).toHaveBeenCalledWith('/about')
  })
})
