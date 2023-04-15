import Head from "next/head";
import Header from "@/components/Header";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
        <meta name="robots" content="all" />
        <link rel="icon" href="https://itunes.apple.com/favicon.ico" />
      </Head>
      <Header />
      {children}
    </>
  );
}
