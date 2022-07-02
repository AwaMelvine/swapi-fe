import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  border: 1px solid green;
  margin: 32px auto;
  width: 60%;
`;

const CharacterList = () => {
  return (
    <Wrapper>
      {['One', 'Two', 'Three'].map(name => <p>{name}</p>)}
    </Wrapper>
  );
};

export default CharacterList;
