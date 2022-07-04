import Head from 'next/head';
import type { NextPage } from 'next';
import { useQuery } from '@apollo/client';
import { GET_PERSON_BY_ID_QUERY } from 'src/queries';
import { useRouter } from 'next/router';
import { Person } from 'src/types';
import CharacterDetails from 'src/components/CharacterDetails';

type GetPersonByIdQueryResponse = {
  personById: Person;
}

type GetPersonByIdQueryVariables = {
  personId: number | null;
};

const Home: NextPage = () => {
  const { query, back } = useRouter();
  const personId = !!query.personId ? Number(query.personId) : null;
  const { loading, data } = useQuery<GetPersonByIdQueryResponse, GetPersonByIdQueryVariables>(GET_PERSON_BY_ID_QUERY, { variables: { personId } });

  if (loading && !data) {
    return <p>Loading...</p>
  }

  return (
    <div>
      <Head>
        <title>{personId}</title>
        <meta name="description" content="A list of all Start Wars characters and details about them" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div style={{ width: '60%', margin: '10px auto 64px' }}>
          <button onClick={() => back()}>Back</button>
          <CharacterDetails person={data?.personById as Person} />
        </div>
      </main>
    </div>
  );
}

export default Home
