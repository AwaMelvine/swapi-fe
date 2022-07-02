import type { NextPage } from 'next';
import Head from 'next/head';
import CharacterList from "src/components/CharacterList";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Star Wars Characters</title>
        <meta name="description" content="A list of all Start Wars characters and details about them" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <CharacterList />
      </main>
    </div>
  );
}

export default Home
