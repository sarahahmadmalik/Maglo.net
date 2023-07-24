import '../styles/globals.css'
import {  Roboto } from "next/font/google";


const font = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700"],
});


export default function App({ Component, pageProps }) {
  return (
    <>
  <main className={font.className}>
    <Component {...pageProps}/>
    </main> 
    </>
    )
}
