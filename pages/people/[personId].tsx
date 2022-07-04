import Head from 'next/head';
import type { NextPage } from 'next';
import { useQuery } from '@apollo/client';
import { GET_PERSON_BY_ID_QUERY } from 'src/queries';
import { useRouter } from 'next/router';
import { Person } from 'src/types';
import CharacterDetails from 'src/components/CharacterDetails';
import PageSection from 'src/components/PageSection';

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

  return (
    <div>
      <Head>
        <title>{data?.personById.name ?? 'Character Details'}</title>
        <meta name="description" content="A list of all Start Wars characters and details about them" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <CharacterDetails loading={loading} person={data?.personById as Person} />
      </main>
    </div>
  );
}

export default Home
