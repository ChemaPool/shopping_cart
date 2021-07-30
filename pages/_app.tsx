import type { AppProps } from 'next/app';
import Layout from 'pages/components/shared/Layout';
import { Provider } from 'pages/utils/Context';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}

export default MyApp;
