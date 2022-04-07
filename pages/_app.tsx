import "../styles/globals.css";
import type { AppProps } from "next/app";
import WrapperLayout from "components/layout/WrapperLayout";

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <WrapperLayout>
      <Component {...pageProps} />
    </WrapperLayout>
  );
}

export default MyApp;
