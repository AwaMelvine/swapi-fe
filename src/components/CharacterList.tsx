import Link from 'next/link';
import React from 'react';
import { Person } from 'src/types';
import styled from 'styled-components';
import PageSection from 'src/components/PageSection';

const PersonCard = styled.a`
  display: block;
  margin: 0 auto 32px;
  border: 1px solid lightgray;
`;

type Props = {
  people: Person[];
};

const CharacterList: React.FC<Props> = ({ people }) => {
  return (
    <PageSection>
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
    </PageSection>
  );
};

export default CharacterList;
