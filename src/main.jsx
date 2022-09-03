import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { GlobalElement } from './pages/common/'
import Details from './pages/Details'
import Home from './pages/Home'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <GlobalElement/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details/:id" element={<Details />} />
    </Routes>
  </BrowserRouter>
)
