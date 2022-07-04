import React from 'react';
import { Person } from 'src/types';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 32px auto;
  width: 60%;
`;

type Props = {
  person: Person;
};

const CharacterDetails: React.FC<Props> = ({ person }) => {
  return (
    <Wrapper>
      <p>{person.name}</p>
    </Wrapper>
  );
};

export default CharacterDetails;
