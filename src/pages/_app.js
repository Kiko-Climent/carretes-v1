import Menu from "@/components/Header";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {

  return(
  <>
    <Menu />
    <Component {...pageProps} />
  </>
  ) 
}
