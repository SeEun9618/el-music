import Layout from "@/components/Layout";
import Error from "@/pages/_errors";
import GlobalStyle from "@/styles/GlobalStyles";

export default function App({ Component, pageProps }) {
  if (pageProps.error) {
    return <Error statusCode={pageProps.error.statusCode} />;
  }

  const getLayout = Component.getLayout || ((page) => <Layout>{page}</Layout>);

  return getLayout(
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}
