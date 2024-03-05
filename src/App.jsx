import { useState } from 'react'
import './App.css'
import { CalendarPage} from './Components/Calenndar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Date from './Pages/Date'


function App() {
  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path='/' element= {<Home/> }/>
      <Route path='date' element={<Date/> }/>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
