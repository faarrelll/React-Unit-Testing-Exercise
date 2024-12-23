
import React from 'react'

const Navbar = ({ currentPage, setCurrentPage }) => {
  return (
    <nav style={{
      padding: '1rem',
      backgroundColor: '#333',
      color: 'white',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}>
      <div className="logo" style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>
        MyStore
      </div>
      <div style={{ display: 'flex', gap: '1rem' }}>
        <span 
          className={currentPage === 'home' ? 'nav-link-active' : 'nav-link'}
          onClick={() => setCurrentPage('home')}
        >
          Home
        </span>
        <span 
          className={currentPage === 'products' ? 'nav-link-active' : 'nav-link'}
          onClick={() => setCurrentPage('products')}
        >
          Products
        </span>
        <span 
          className={currentPage === 'contact' ? 'nav-link-active' : 'nav-link'}
          onClick={() => setCurrentPage('contact')}
        >
          Contact Us
        </span>
      </div>
    </nav>
  )
}

export default Navbar