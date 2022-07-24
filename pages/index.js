import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

const Home = ({ homepageData }) => {

  const elp = homepageData.data.attributes.section[0].description.split(/\r?\n/);

  return (
    <>
      <div className="bg-header-light">
        <div className="container">
          <header>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 place-items-center">
              <div className="order-3 md:order-none w-full">
                <h1 className="text-black font-extrabold font-title text-lg text-center md:text-5xl md:text-left mb-10">
                  {homepageData.data.attributes.hero[0].title}
                </h1>
                <p className="mb-10 italic">
                  {homepageData.data.attributes.hero[0].description}
                </p>
                <button className="uppercase font-bold shadow-xl p-4 rounded-lg bg-yellow-600 hover:bg-yellow-500 transition ease-in-out duration-300 text-white">
                  {homepageData.data.attributes.hero[0].button.title}
                </button>
              </div>
              <div className="w-full text-center">
                <Image
                  src={`http://localhost:1337${homepageData.data.attributes.hero[0].image.data.attributes.url}`}
                  width={575}
                  height={460}
                  alt="hero_picture"
                />
              </div>
            </div>
          </header>
        </div>
      </div>
      <section className="container my-16">
        <h2 className="mb-10 text-center text-4xl font-semibold">
          {homepageData.data.attributes.section[0].title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-5 place-content-center place-items-center">
          <div className="col-start-2 col-end-5">
          {elp.map((paragraph) => (
            <p key={paragraph} className="p-2">{paragraph}</p>
          ))}
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
