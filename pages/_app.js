import '../styles/globals.css'
import {  Roboto } from "next/font/google";
import {AuthProvider} from '../context/AuthProvider'

const font = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700"],
});


export default function App({ Component, pageProps }) {
  return (
    <>
  <main className={font.className}>
  <AuthProvider>
    <Component {...pageProps}/>
    </AuthProvider>
    </main> 
    </>
    )
}
