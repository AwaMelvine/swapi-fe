import React from 'react';
import Link from 'next/link';
import { useQuery } from '@apollo/client';
import { useRouter } from 'next/router';

import type { PeoplePage } from 'src/types';
import PageSection from 'src/components/PageSection';
import { generatePaginationNumbers } from 'src/utils';
import { GET_PEOPLE_PAGE_QUERY } from 'src/queries';
import CharacterList from 'src/components/CharacterList';
import LoadingSpinner from 'src/components/LoadingSpinner';

type GetPeoplePageQueryResponse = {
  peoplePage: PeoplePage;
};

type GetPeoplePageQueryVariables = {
  currentPage: number;
};

const CharactersSection = () => {
  const { query } = useRouter();
  const currentPage = !!query.page ? Number(query.page) : 1;
  const { loading, error, data } = useQuery<GetPeoplePageQueryResponse, GetPeoplePageQueryVariables>(GET_PEOPLE_PAGE_QUERY, { variables: { currentPage } });
  const paginationNumbers = data?.peoplePage ? generatePaginationNumbers(currentPage, data.peoplePage.count) : undefined;

  if (loading && !data) {
    return <LoadingSpinner />;
  }

  // Todo: Design a better component to display errors
  if (error) {
    return <p>Unable to load characters. Please try again.</p>
  }
  
  return (
    <PageSection>
      <span></span>
      {data?.peoplePage?.people && <CharacterList people={data.peoplePage.people} />}
      {paginationNumbers?.map(page => {
        if (page === '...') {
          return <Link key={page} href="#">{page}</Link>
        }
        return (
          <Link key={page} href={`?page=${page}`}>{page}</Link>
        );
      })}
    </PageSection>
  );
};

export default CharactersSection;
