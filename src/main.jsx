import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'
import App from './App.jsx'
import './index.css'

const colors = {
  brand: {
    900: '#e75129',/* naranja */
    800: '#152F61', /* azul oscuro background */
    700: '#035CC6', /* azul claro */
    600: '#F2F2F2', /* blanco hueso */
  },
}
const theme = extendTheme({ colors })

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
)
