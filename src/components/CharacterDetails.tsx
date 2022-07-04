import React from 'react';
import { Person } from 'src/types';
import PageSection from 'src/components/PageSection';

type Props = {
  person: Person;
};

const CharacterDetails: React.FC<Props> = ({ person }) => {
  return (
    <PageSection>
      <p>{person.name}</p>
    </PageSection>
  );
};

export default CharacterDetails;
