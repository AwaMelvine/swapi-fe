import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 50%;
  margin: 0 auto 0;
`;

type Props = {
  children: React.ReactNode;
};

const PageSection: React.FC<Props> = ({ children }) => <Wrapper>{children}</Wrapper>;

export default PageSection;
