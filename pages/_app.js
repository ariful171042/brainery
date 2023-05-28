import Footer from "@/components/Footer";
import Navber from "@/components/Navber";
import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function App({ Component, pageProps, session }) {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <SessionProvider session={session}>
        <Navber />
        <Component {...pageProps} />
        <Footer />
      </SessionProvider>
    </>
  );
}
