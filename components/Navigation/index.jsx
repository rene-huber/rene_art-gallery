import Link from "next/link"

function Navigation() {
  return (
    <nav>
         <ul>
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