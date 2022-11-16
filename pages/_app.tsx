import type { AppProps } from "next/app";
import Layout from "../app/components/Layout/Layout";

import "../app/styles/globals.scss";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
}
