import React from 'react';
import styled from 'styled-components';
import { Button, Divider, Heading } from '@chakra-ui/react';
import { ArrowBackIcon } from '@chakra-ui/icons';

import { Person } from 'src/types';
import PageSection from 'src/components/PageSection';
import { useRouter } from 'next/router';
import { ucfirst } from 'src/utils';
import LoadingSpinner from 'src/components/LoadingSpinner';

type Props = {
  person: Person;
  loading: boolean;
};

const CharacterWrapper = styled.div`
  display: flex;
  margin-top: 32px;
  background-color: #141439b7;
`;

const ImageWrapper = styled.div`
  overflow: hidden;
  img {
    max-height: 600px;
  }
`;

const DetailsWrapper = styled.div`
  padding-left: 23px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: white;
`;

const CharacterDetails: React.FC<Props> = ({ person, loading }) => {
  const router = useRouter();

  if (loading && !person) {
    return <LoadingSpinner />;
  }

  return (
    <PageSection widthInPercentage={60}>
      <Button leftIcon={<ArrowBackIcon />} onClick={() => router.back()} colorScheme='blue' variant='outline' >Back</Button>

      <CharacterWrapper>
        <ImageWrapper>
          <img src={person.image} alt={`A picture of ${person.name}`} />
        </ImageWrapper>
        <DetailsWrapper>
          <Heading as='h1' display='block'>{person.name}</Heading>
          <Divider color='lightblue' width='80' margin={30} marginLeft={0} />
          <div style={{ color: 'lightblue' }}>
            <p>Gender: {ucfirst(person.gender)}</p>
            <p>Height: {person.height}cm</p>
            <p>Mass: {person.mass}</p>
          </div>
        </DetailsWrapper>
      </CharacterWrapper>
    </PageSection>
  );
};

export default CharacterDetails;
