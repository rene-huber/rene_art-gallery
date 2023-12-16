import React from 'react'
import Navigation from '../Navigation'

function Layout({ children }) {
  return (
  <>
  <header>
    <h1>Art Galerry</h1>
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