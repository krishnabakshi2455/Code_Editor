import { useState } from 'react'
import Home from './components/Home'
import ContextData from './ContextF/ContextData'
function App() {


  return (
    <>
      <ContextData>
        <Home />

      </ContextData>


    </>
  )
}

export default App
