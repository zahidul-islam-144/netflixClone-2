import "../styles/globals.scss";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import StoreProvider from "../context/StoreContext";
import Login from "./login";

function MyApp({ Component, pageProps }: AppProps) {
  
  return ( true ?
    <StoreProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </StoreProvider> : <Login/>
  );
}

export default MyApp;
