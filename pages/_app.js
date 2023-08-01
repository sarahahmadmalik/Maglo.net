import '../styles/globals.css'
import {  Roboto } from "next/font/google";
import {AuthProvider} from '../context/AuthProvider'
import {OrderProvider} from '../context/OrderContext'
const font = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700"],
});


export default function App({ Component, pageProps }) {
  return (
    <>
  <main className={font.className}>
  <AuthProvider>
    <OrderProvider>
    <Component {...pageProps}/>
    </OrderProvider>
    </AuthProvider>
    </main> 
    </>
    )
}
