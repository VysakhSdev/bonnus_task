import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Chart from './pages/Chart'

function App() {
  return (
  
<Routes>
    <Route index element={<Chart/>}/>
</Routes>
  
  )
}

export default App