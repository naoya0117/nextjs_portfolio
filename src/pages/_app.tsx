import Script from "next/script";
import * as gtag from "../lib/gtag";
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { useRouter } from "next/router";
import { useEffect } from "react";


export default function App({ Component, pageProps }: AppProps) {
    const router = useRouter();
    useEffect(() => {
        const handleRouterChange = (url: any) => {
            gtag.pageview(url);
        };
        router.events.on("routeChangeComplete", handleRouterChange);
        return () => {
            router.events.off("routeChangeComplete", handleRouterChange);
        };
    }, [router.events]);
  return  (
    <div className="App"> 
        <Script
         strategy="afterInteractive"
         src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_MEASUREMENT_ID}`}
       />
       <Script
         id="gtag-init"
         strategy="afterInteractive"
         dangerouslySetInnerHTML={{
           __html: `
           window.dataLayer = window.dataLayer || [];
           function gtag(){dataLayer.push(arguments);}
           gtag('js', new Date());

           gtag('config', '${gtag.GA_MEASUREMENT_ID}');
           `,
         }}
       />
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </div>
  )
}
