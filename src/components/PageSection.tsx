import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 0 auto;
  width: 50%;
  border: 3px dashed red;
`;

type Props = {
  children: React.ReactNode;
};

const PageSection: React.FC<Props> = ({ children }) => <Wrapper>{children}</Wrapper>;

export default PageSection;
