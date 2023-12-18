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
  const cursorOuterStyle = {border: !isDarkTheme ? '1px solid black' : '1px solid white',}

  return (
    <div className={isDarkTheme ? 'dark' : ''}>
<AnimatedCursor
  innerSize={8}
  outerSize={27}
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
