import useSWR from 'swr';
import Navbar from './navbar';

const fetcher = (url) => fetch(url).then((res) => res.json());

const Layout = ({ children }) => {
  const { data, error } = useSWR('http://localhost:1337/api/navs', fetcher);

  if (error) return 'Une erreur est survenue';
  if (!data) return 'Chargement en cours...';

  return (
    <>
      <Navbar links={data} />
      <main>{children}</main>
    </>
  );
};

export default Layout;
