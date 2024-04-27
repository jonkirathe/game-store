import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import theme from "./theme.ts";
import {ChakraProvider, ColorModeScript} from "@chakra-ui/react";


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <ChakraProvider theme={theme}>
          <ColorModeScript initialColorMode={theme.config.initialColorMode}/>
          <App />
      </ChakraProvider>
  </React.StrictMode>,
)
