import React, { useEffect, useState } from 'react';
import { useQuery, useLazyQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import styled from 'styled-components';

import type { PeoplePage, Person } from 'src/types';
import PageSection from 'src/components/PageSection';
import { generatePaginationNumbers } from 'src/utils';
import { GET_PEOPLE_PAGE_QUERY, SEARCH_PEOPLE_BY_NAME_QUERY } from 'src/queries';
import CharacterList from 'src/components/CharacterList';
import LoadingSpinner from 'src/components/LoadingSpinner';
import { Input } from '@chakra-ui/react';

type PaginationLinkProps = {
  numbers: (number | string)[];
  currentPage: number;
};


const PaginationButtonGroup = styled.div`
  margin: 16px auto 32px;
  display: inline-block;
`;
  
const PageLink = styled.a<{active: boolean}>`
  color: #85a2b0;
  float: left;
  padding: 8px 16px;
  text-decoration: none;
  transition: background-color .3s;
  border: 1px solid #85a2b0;
  margin: 0 4px;
  border-radius: 2px;
  background: ${props => props.active ? '#c6ecff57' : 'transparent'};

  &:hover {
    color: white;
    border: 1px solid white;
  }
`;


const PaginationLinks: React.FC<PaginationLinkProps> = ({ numbers, currentPage }) => {
  return (
    <PaginationButtonGroup>
      {numbers.map(page => {
        if (page === '...') {
          return <button key={page} disabled style={{ color: 'white' }}>{page}</button>
        }
        return (
          <PageLink active={currentPage === page} key={page} href={`?page=${page}`}>{page}</PageLink>
        );
      })}
    </PaginationButtonGroup>
  );
}


type SearchPeopleQueryResponse = {
  searchPeople: Person[];
};

type GetPeoplePageQueryResponse = {
  peoplePage: PeoplePage;
};

type GetPeoplePageQueryVariables = {
  currentPage: number;
};

const CharactersSection = () => {
  const [currentCharacters, setCurrentCharacters] = useState<Person[]>();
  const [searchTerm, setSearchTerm] = useState<string>('');
  const { query } = useRouter();
  const currentPage = !!query.page ? Number(query.page) : 1;
  const { loading, error, data } = useQuery<GetPeoplePageQueryResponse, GetPeoplePageQueryVariables>(GET_PEOPLE_PAGE_QUERY, { variables: { currentPage } });
  const [searchPeopleByName, { loading: searchResultsLoading, error: searchError, data: searchData }] = useLazyQuery<SearchPeopleQueryResponse>(SEARCH_PEOPLE_BY_NAME_QUERY);
  const paginationNumbers = data?.peoplePage ? generatePaginationNumbers(currentPage, Math.ceil(data.peoplePage.total/10)) : undefined;

  useEffect(() => {
    if (data?.peoplePage) {
      const newCharacterList = data.peoplePage.people.map(person => ({
        ...person,
        displaying: true,
      }));
      setCurrentCharacters(newCharacterList);
    }
  }, [data]);

  useEffect(() => {
    if (searchTerm.length > 0) {
      searchPeopleByName({ variables: { name: searchTerm } }).then(res => {
        const newCharacterList = currentCharacters?.map(person => ({
          ...person,
          displaying: false,
        }))!;
        const searchResults = res.data?.searchPeople.map(person => ({
          ...person,
          displaying: true,
        }))!;
        setCurrentCharacters([...searchResults, ...newCharacterList]);
      });
    } else {
      setCurrentCharacters(currentCharacters?.map(person => ({ ...person, displaying: true })));
    }
  }, [searchTerm]);

  if ((loading && !data) || (!searchTerm && searchResultsLoading)) {
    return <LoadingSpinner />;
  }

  // Todo: Design a better component to display errors
  if (error) {
    return (
      <PageSection>
        <p>Unable to load characters. Please try again.</p>
      </PageSection>
    );
  }

  const searchCharacterByName = (event: any) => {
    setSearchTerm(event.target.value);
  };

  return (
    <PageSection>
      <Input onChange={searchCharacterByName} placeholder='Search characters by their name...' color='lightblue' />
      {paginationNumbers && !searchTerm && <PaginationLinks numbers={paginationNumbers} currentPage={currentPage} />}
      {currentCharacters && <CharacterList people={currentCharacters} />}
      {paginationNumbers && !searchTerm && <PaginationLinks numbers={paginationNumbers} currentPage={currentPage} />}
    </PageSection>
  );
};

export default CharactersSection;
