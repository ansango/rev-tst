import "../styles/globals.css";
import type { AppProps } from "next/app";
import WrapperLayout from "components/layout/WrapperLayout";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import store from "@/lib-client/store";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <WrapperLayout>
        <Component {...pageProps} />
        <Toaster />
      </WrapperLayout>
    </Provider>
  );
}

export default MyApp;
