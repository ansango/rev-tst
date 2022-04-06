import "../styles/globals.css";

import type { AppProps } from "next/app";
import Navbar from "components/Components/common/Navbar/Navbar";
import Footer from "components/Components/common/Footer/Footer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="flex flex-col justify-between h-screen">
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;
