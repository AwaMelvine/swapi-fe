import Link from 'next/link';
import React from 'react';
import { Person } from 'src/types';
import styled from 'styled-components';
import { Heading } from '@chakra-ui/react';
import LoadingSpinner from 'src/components/LoadingSpinner';
import { ucfirst } from 'src/utils';

const PersonCard = styled.a`
  display: block;
  margin: 0 auto 32px;
  border-radius: 5px;
  background-color: #141439b7;
  height: 300px;
  display: flex;
  color: gray;
  border: 0.5px solid transparent;

  &:hover {
    background-color: #101030d0;
    cursor: pointer;
    border: 0.5px solid darkgray;

    .name {
      color: white;
    }
  }
`;

const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  padding: 20px;
  flex: 1;

  img {
    border-radius: 5px;
    max-height: 280px;
  }
`;

const DetailsWrapper = styled.div`
  align-self: center;
  justify-self: center;
  width: 200px;
  padding: 20px;
  flex: 2;
`;

const CharacterName = styled(Heading)`
  font-size: 2rem;
  color: #aac2ed;
  font-family: 'Alfa Slab One', cursive;
`;

type Props = {
  people: Person[];
  loading?: boolean;
};

const CharacterList: React.FC<Props> = ({ people, loading }) => {
  if (!people && loading) {
    return <LoadingSpinner />;
  }

  return (
    <React.Fragment>
      {people.map((person) => {
        return (
          <Link href={`/people/${person.id}`} key={person.id}>
          <PersonCard>
            <ImageWrapper>
              <img src={person.image} alt={`A picture of ${person.name}`} />
            </ImageWrapper>
            <DetailsWrapper>
              <CharacterName as="h2" className="name">{person.name}</CharacterName>
              <Heading as='h3' size='md'>Gender: {ucfirst(person.gender)}</Heading>
            </DetailsWrapper>
          </PersonCard>
        </Link>
        );
      })}
    </React.Fragment>
  );
};

export default CharacterList;
