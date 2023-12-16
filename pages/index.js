import SpotLight from "@/components/SpotLight";
import Link from "next/link";


export default function HomePage() {
  return (
    <div>
     <h1>Art Gallery</h1>
<ul>
<li> 
  <Link href={"/art-pieces"}>art pieces</Link> {""} <br/><br/>
  <Link href={"/spotlight"}>Spotlight</Link>
  <Link href={"/favorites"}>fav</Link>

  
</li>

</ul>

    </div>
  );
}
