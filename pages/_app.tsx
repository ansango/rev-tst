import "../styles/globals.css";
import type { AppProps } from "next/app";
import WrapperLayout from "components/layout/WrapperLayout";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import store from "@/lib-client/store";
import { motion } from "framer-motion";

function MyApp({ Component, pageProps, router: { route } }: AppProps) {
  return (
    <Provider store={store}>
      <motion.div
        key={route}
        initial="initial"
        animate="animate"
        variants={{
          initial: { opacity: 0 },
          animate: { opacity: 1 },
        }}
      >
        <WrapperLayout>
          <Component {...pageProps} />

          <Toaster />
        </WrapperLayout>
      </motion.div>
    </Provider>
  );
}

export default MyApp;
