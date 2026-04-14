import { Routes, Route } from 'react-router-dom'

import './App.css'
import { Home } from './pages/Home/Home.tsx'
import { Menu } from './pages/Menu/Menu.tsx'
import { Showcase } from './pages/Showcase/Showcase.tsx'


function App() {
  return (
    <Routes>
      {/* home = / */}
      <Route path="/" element={<Home />} />

      {/* menu = /menu */}
      <Route path="/menu" element={<Menu />} />

      {/* showcase = /showcase */}

      <Route path="/showcase" element={<Showcase/>}/>
    </Routes>
  )
}

export default App
