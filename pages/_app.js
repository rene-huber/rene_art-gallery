import useSWR from "swr";
import GlobalStyle from "../styles"
import { useEffect } from "react"
import useStore from "../store"
import Layout from "@/components/Layout";
import Loading from "@/components/Loading";
import AnimatedCursor from "react-animated-cursor"

const fetcher = (url) => fetch(url).then((response) => response.json())

export default function App({ Component, pageProps }) {
  const { data, setData } = useStore(); 

  const { data: swrData, error, isLoading } = useSWR(
    "https://example-apis.vercel.app/api/art", fetcher
  )

  useEffect(() => { if (swrData) { setData(swrData); }
  }, [swrData, setData]);


  if (isLoading) return <Loading />
  if (error) return <div>Error: {error.message}</div>
  if (!data) return <div>No data...</div>

  return (
    <>
<AnimatedCursor
  innerSize={8}
  outerSize={27}
  innerScale={1}
  outerScale={2}
  outerAlpha={0}
  hasBlendMode={true}
  innerStyle={{
    backgroundColor: 'black'
  }}
  outerStyle={{
    border: '1px solid black'
  }}
/>
      <GlobalStyle />
      <Layout>
      <Component {...pageProps} />
      </Layout>
      
    </>
  );
}
