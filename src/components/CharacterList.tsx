import { useQuery } from '@apollo/client';
import Link from 'next/link';
import React from 'react';
import { GET_PEOPLE_PAGE_QUERY } from 'src/queries';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 32px auto;
  width: 60%;
`;

const PersonCard = styled.a`
  display: block;
  margin: 30px auto;
  border: 1px solid lightgray;
`;

const CharacterList = () => {
  const { loading, error, data } = useQuery(GET_PEOPLE_PAGE_QUERY, {  variables: { currentPage: 1 } });

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <Wrapper>
      {data.peoplePage.people.map((person: any) => (
        <Link href={`/people/${person.id}`} key={person.id}>
          <PersonCard>
            <React.Fragment>
              <img src={person.image} alt="" width={150} />
              <span>{person.name}</span>
            </React.Fragment>
          </PersonCard>
        </Link>
      ))}
    </Wrapper>
  );
};

export default CharacterList;
