import Link from "next/link"

function Navigation() {
  return (
    <nav>
          <h1>Art Galerry</h1>
         <ul>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/spotlight">Spotlight</Link>
      </li>
      <li>
        <Link href="/art-pieces">Pieces</Link>
      </li>
      <li>
        <Link href="/favorites">Favorites</Link>
      </li>
    </ul>
    </nav>
  )
}

export default Navigation