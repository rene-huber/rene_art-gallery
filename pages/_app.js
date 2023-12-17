import useSWR from "swr";
import GlobalStyle from "../styles"
import { useEffect } from "react"
import useStore from "../store"
import Layout from "@/components/Layout";
import Loading from "@/components/Loading";

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

      <GlobalStyle />
      <Layout>
      <Component {...pageProps} />
      </Layout>
      
    </>
  );
}
