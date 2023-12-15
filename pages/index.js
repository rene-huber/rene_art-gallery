import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <h1>Hello from Next.js</h1>
<ul>
<li> 
  <Link href={"/art-pieces"}>art pieces</Link>
</li>

</ul>

    </div>
  );
}
