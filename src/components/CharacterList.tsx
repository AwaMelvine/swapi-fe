import Link from 'next/link';
import React from 'react';
import { Person } from 'src/types';
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

type Props = {
  people: Person[];
};

const CharacterList: React.FC<Props> = ({ people }) => {
  return (
    <Wrapper>
      {people.map((person) => (
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
