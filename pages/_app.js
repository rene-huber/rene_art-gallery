import useSWR from "swr";
import  "./styles.css"
import { useEffect } from "react"
import useStore from "../store"
import Layout from "@/components/Layout";
import Loading from "@/components/Loading";
import AnimatedCursor from "react-animated-cursor"

const fetcher = (url) => fetch(url).then((response) => response.json())

export default function App({ Component, pageProps }) {
  const { data, setData, isDarkTheme } = useStore(); 

  const { data: swrData, error, isLoading } = useSWR(
    "https://example-apis.vercel.app/api/art", fetcher
  )

  useEffect(() => { if (swrData) { setData(swrData); }
  }, [swrData, setData]);


  if (isLoading) return <Loading />
  if (error) return <div>Error: {error.message}</div>
  if (!data) return <div>No data...</div>

  const cursorInnerStyle = {backgroundColor: !isDarkTheme ? 'black' : 'white',}
  const cursorOuterStyle = {backgroundColor: !isDarkTheme ? 'white' : 'white',
  mixBlendMode: "difference",
    border: !isDarkTheme ? '1px solid black' : '1px solid rgba(255, 255, 255, 0.1)',}

  return (
    <div className={isDarkTheme ? 'dark' : ''}>
<AnimatedCursor
  innerSize={9}
  outerSize={23}
  innerScale={1}
  outerScale={2}
  outerAlpha={0}
  hasBlendMode={true}
  innerStyle={cursorInnerStyle}
  outerStyle={cursorOuterStyle}
/>
     
      <Layout>
      <Component {...pageProps} />
      </Layout>
      
    </div>
  );
}
