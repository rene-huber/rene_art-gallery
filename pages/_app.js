import useSWR from "swr";
import GlobalStyle from "../styles"
import { useEffect } from "react"
import useStore from "../store"

const fetcher = (url) => fetch(url).then((response) => response.json())

export default function App({ Component, pageProps }) {
  const { data, setData } = useStore(); 

  const { data: swrData, error, isLoading } = useSWR(
    "https://example-apis.vercel.app/api/art", fetcher
  )

  useEffect(() => { if (swrData) { setData(swrData); }
  }, [swrData, setData]);


  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>
  if (!data) return <div>No data...</div>

  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}
