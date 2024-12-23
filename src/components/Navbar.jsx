import React from 'react'

const Navbar = ({ setCurrentPage }) => {
  // Object styling
  const navStyle = {
    padding: '1rem',
    backgroundColor: '#333',
    color: 'white',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  }

  const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    padding: '0.5rem 1rem',
    cursor: 'pointer'
  }

  return (
    <nav style={navStyle}>
      <div className="logo">Kuncoro Store</div>
      <div>
        <span style={linkStyle} onClick={() => setCurrentPage('home')}>Home</span>
        <span style={linkStyle} onClick={() => setCurrentPage('products')}>Products</span>
        <span style={linkStyle} onClick={() => setCurrentPage('contact')}>Contact Us</span>
      </div>
    </nav>
  )
}

export default Navbar

