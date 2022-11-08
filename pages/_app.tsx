import type { AppProps } from "next/app";
import "../app/styles/globals.css";
import { Nunito } from "@next/font/google";

const nunito = Nunito();

export default function App({ Component, pageProps }: AppProps) {
    return (
        <main className={nunito.className}>
            <Component {...pageProps} />
        </main>
    );
}
