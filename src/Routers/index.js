import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainPage from '../Pages/Page/index'

export default function Routers() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='*' element={<MainPage/>}/>
    </Routes>
    </BrowserRouter>
  )
}
