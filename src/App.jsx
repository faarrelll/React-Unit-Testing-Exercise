// src/App.jsx
import { useState } from 'react'
import Navbar from './components/Navbar'
import './App.css'
import Home from './pages/Home'

function App() {
  const [currentPage, setCurrentPage] = useState('home')
  
  return (
    <div className="app">
      <Navbar setCurrentPage={setCurrentPage} />
      <div>
      {currentPage === 'home' && <Home />}
      {currentPage === 'products' && <div>Products Page</div>}
      {currentPage === 'contact' && <div>Contact Page</div>}
      </div>
    </div>
  )
}

export default App