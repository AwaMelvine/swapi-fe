import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div<{ width?: number }>`
  margin: 0 auto;
  width: ${props => props.width + '%'};
`;

type Props = {
  widthInPercentage?: number;
  children: React.ReactNode;
};

const PageSection: React.FC<Props> = ({ children, widthInPercentage }) => {
  const sectionWidth = widthInPercentage && (widthInPercentage > 0 || widthInPercentage < 100) ? widthInPercentage : 60;

  return (
    <Wrapper width={sectionWidth}>{children}</Wrapper>
  );
};

export default PageSection;
