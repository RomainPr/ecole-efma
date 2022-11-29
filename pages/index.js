import Head from 'next/head';
import Image from 'next/image';
import Navbar from '../components/navbar';
import styled from 'styled-components';
import useSWR from 'swr';

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

import Metro from '../assets/images/metro.png';

import { ArrowRightIcon } from '@heroicons/react/solid';

const fetcher = (url) => fetch(url).then((res) => res.json());

const Home = ({ homepageData }) => {
  const { data, error } = useSWR(
    'http://localhost:1337/api/navigation/render/1',
    fetcher
  );

  console.log(homepageData);

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
      background-color: rgba(0, 0, 0, 0.15);
    }
  `;

  return (
    <>
      <Head>
        <title>E.F.M.A - {homepageData.data.attributes.title}</title>
      </Head>
      <div className="bg-header-light">
        <div>
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
      <section className="bg-black px-8 lg:px-16 py-16">
        <h2 className="mb-10 text-left text-white text-4xl font-semibold">
          {homepageData.data.attributes.section[0].title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 place-content-center place-items-center gap-10 lg:px-16">
          <div>
            <p className="leading-8 text-lg text-white">
              {homepageData.data.attributes.section[0].paragraph}
            </p>
          </div>
          <div>
            <Image src={Metro} alt="Metro_St_Mande" />
          </div>
        </div>
      </section>
      <section className="bg-black px-8 lg:px-16 py-16">
        <h2 className="mb-10 text-left text-white text-4xl font-semibold">
          {homepageData.data.attributes.section2[0].title}
        </h2>
        <div className="grid grid-cols-1 place-content-center">
          <Carousel autoPlay infiniteLoop showStatus={false} >
            {homepageData.data.attributes.section2[0].image.data.map(
              (image, index) => (
                <div key={index}>
                  <Image
                    src={`http://localhost:1337${image.attributes.url}`}
                    alt=""
                    width={800}
                    height={600}
                  />
                </div>
              )
            )}
          </Carousel>
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
