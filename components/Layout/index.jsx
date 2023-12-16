import React from 'react'
import Navigation from '../Navigation'

function Layout({ children }) {
  return (
  <>
  <header>
  
    <Navigation />
  </header>

<main>
    { children }
</main>

<footer>
    <p>Footer - &copy; 2023</p>
</footer>

  </>
  )
}

export default Layout