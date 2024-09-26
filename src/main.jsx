import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ChakraProvider, theme } from '@chakra-ui/react'
import "@fontsource/ubuntu"
import "@fontsource/ubuntu/400.css"; // Specify weight
import "@fontsource/ubuntu/500.css"; // Specify weight
import "@fontsource/ubuntu/700.css"; // Specify weight
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <ChakraProvider theme={theme}>
    <App />
    </ChakraProvider>
  </React.StrictMode>,
)
