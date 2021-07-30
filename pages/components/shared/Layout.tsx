import 'tailwindcss/tailwind.css';
import Navbar from 'pages/components/shared/Navbar';
import Head from 'next/head';

const Layout: React.FC = ({ children }) => (
  <>
    <Head>
      <title>Chema Store</title>
      <meta name="description" content="Generated by create next app" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Navbar />
    <div className="container mx-auto py-24">
      {children}
    </div>
  </>
);

export default Layout;