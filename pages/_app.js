import { useState, useEffect } from 'react';
import '../styles/globals.css';
import Layout from '../components/layout';
import Loader from '../components/loader';

function MyApp({ Component, pageProps }) {
  const [loading, setIsloading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsloading(false);
    }, 500);
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      )}
    </>
  );
}

export default MyApp;
