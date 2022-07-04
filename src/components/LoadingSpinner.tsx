import React from 'react';
import { Spinner } from '@chakra-ui/react';
import styled from 'styled-components';

const Wrapper = styled.div`
  text-align: center;
  margin: 32px auto 32px;
`;

const LoadingSpinner = () => {
  return (
    <Wrapper>
      <Spinner size='xl' color='lightgray' />
    </Wrapper>
  );
};

export default LoadingSpinner;