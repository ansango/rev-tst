import "../styles/globals.css";
import type { AppProps } from "next/app";
import WrapperLayout from "components/layout/WrapperLayout";
import { useCurrentUser } from "@/lib-client/user/hooks";
import { useRouter } from "next/router";
import { useEffect } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <WrapperLayout>
      <Component {...pageProps} />
    </WrapperLayout>
  );
}

export default MyApp;
