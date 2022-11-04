import Head from 'next/head';
import Image from 'next/image';
import Navbar from '../components/navbar';
import styled from 'styled-components';
import useSWR from 'swr';

import { ArrowRightIcon } from '@heroicons/react/solid';

const fetcher = (url) => fetch(url).then((res) => res.json());

const Home = ({ homepageData }) => {
  
  const { data, error } = useSWR(
    'http://localhost:1337/api/navigation/render/1',
    fetcher
  );

  const heroImage = `http://localhost:1337${homepageData.data.attributes.hero[0].image.data.attributes.url}`;

  const Hero = styled.div`
    background-image: url(${heroImage});
    height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    &::before {
      content: '';
      position: absolute;
      top: 0px;
      right: 0px;
      bottom: 0px;
      left: 0px;
      background-color: rgba(0, 0, 0, 0.25);
    }
  `;

  return (
    <>
      <Head>
        <title>E.F.M.A - {homepageData.data.attributes.title}</title>
      </Head>
      <div className="bg-header-light">
        <div className="container mx-auto">
          <header>
            <Hero>
              <Navbar links={data} />
            </Hero>
            <div className="order-3 md:order-none absolute top-64 left-80 right-0 w-4/12">
              <h1 className="text-white font-extrabold font-title text-xl text-center lg:text-6xl md:text-left mb-10">
                {homepageData.data.attributes.hero[0].title}
              </h1>
              <p className="mb-10 italic text-white text-2xl">
                {homepageData.data.attributes.hero[0].description}
              </p>
              <button className="inline-flex items-center uppercase font-bold shadow-xl p-4 rounded-lg bg-yellow-600 hover:bg-yellow-500 transition ease-in-out duration-300 text-white">
                {homepageData.data.attributes.hero[0].button.title}
                <ArrowRightIcon className="h-5 w-5 ml-3" />
              </button>
            </div>
          </header>
        </div>
      </div>
      <section className="container my-16 px-20">
        <h2 className="mb-10 text-left text-4xl font-semibold">
          {homepageData.data.attributes.section[0].title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-5 place-content-left place-items-center">
          <div className="col-start-1 col-end-3">
            <p>{homepageData.data.attributes.section[0].paragraph}</p>
          </div>
          <div>
          
          </div>
        </div>
      </section>
    </>
  );
};

export async function getStaticProps() {
  const res = await fetch('http://localhost:1337/api/homepage?populate=deep');
  const homepageData = await res.json();

  return {
    props: {
      homepageData,
    },
  };
}

export default Home;
