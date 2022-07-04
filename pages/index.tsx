import type { NextPage } from 'next';
import Head from 'next/head';
import CharactersSection from 'src/components/CharactersSection';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Star Wars Characters</title>
        <meta name="description" content="A list of all Start Wars characters and details about them" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className='star-wars-title'>Star Wars</h1>
        <CharactersSection />
      </main>
    </div>
  );
}

export default Home;
