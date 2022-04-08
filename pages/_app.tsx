import "../styles/globals.css";
import type { AppProps } from "next/app";
import WrapperLayout from "components/layout/WrapperLayout";
import { Toaster } from "react-hot-toast";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <WrapperLayout>
      <Component {...pageProps} />
      <Toaster />
    </WrapperLayout>
  );
}

export default MyApp;
