import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import theme from "./theme.ts";
import {ChakraProvider, ColorModeScript} from "@chakra-ui/react";

/*
API-Key: 51026f811bf743ca81a8867275dd9c91
*/


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <ChakraProvider theme={theme}>
          <ColorModeScript initialColorMode={theme.config.initialColorMode}/>
          <App />
      </ChakraProvider>
  </React.StrictMode>,
)
