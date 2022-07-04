import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { useQuery } from '@apollo/client';
import { GET_PEOPLE_PAGE_QUERY } from 'src/queries';
import CharacterList from "src/components/CharacterList";
import { useRouter } from 'next/router';
import { generatePaginationNumbers } from 'src/utils';
import type { PeoplePage } from 'src/types';
import LoadingSpinner from 'src/components/LoadingSpinner';

type GetPeoplePageQueryResponse = {
  peoplePage: PeoplePage;
};

type GetPeoplePageQueryVariables = {
  currentPage: number;
};

const Home: NextPage = () => {
  const { query } = useRouter();
  const currentPage = !!query.page ? Number(query.page) : 1;
  const { loading, data } = useQuery<GetPeoplePageQueryResponse, GetPeoplePageQueryVariables>(GET_PEOPLE_PAGE_QUERY, { variables: { currentPage } });
  const paginationNumbers = data?.peoplePage ? generatePaginationNumbers(currentPage, data.peoplePage.count) : undefined;

  return (
    <div>
      <Head>
        <title>Star Wars Characters</title>
        <meta name="description" content="A list of all Start Wars characters and details about them" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
          <h1 className='star-wars-title'>Star Wars</h1>
          {data?.peoplePage?.people && <CharacterList people={data.peoplePage.people} />}
          {loading && !data && <LoadingSpinner />}
          {paginationNumbers?.map(page => {
            if (page === '...') {
              return <Link key={page} href="#">{page}</Link>
            }
            return (
              <Link key={page} href={`?page=${page}`}>{page}</Link>
            );
          })}
      </main>
    </div>
  );
}

export default Home
