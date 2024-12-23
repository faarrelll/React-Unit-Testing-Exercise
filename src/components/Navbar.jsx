
import React from 'react'

const Navbar = ({ currentPage, setCurrentPage }) => {
  return (
    <nav style={{
      padding: '1rem',
      backgroundColor: '#f0efee',
      color: 'black',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingRight: '2rem',
      paddingLeft: '2rem',
    }}>
      <div className="logo" style={{ fontWeight: '600', fontSize: '1rem' }}>
        Warung Makan Kuncoro
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