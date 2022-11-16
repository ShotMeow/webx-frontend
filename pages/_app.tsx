import type { AppProps } from "next/app";
import Layout from "../app/components/Layout/Layout";

import "../app/styles/globals.scss";

export default function App({ Component, pageProps }: AppProps) {
    return (
<<<<<<< HEAD
        <Layout>
            <Component {...pageProps} />
        </Layout>
=======
        <Component {...pageProps} />
>>>>>>> a58668ef10c8025c9a506bcad0b7a011075a1f94
    );
}
