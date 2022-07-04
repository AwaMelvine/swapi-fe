import React from 'react';
import { Spinner } from '@chakra-ui/react';
import PageSection from './PageSection';

const LoadingSpinner = () => {
  return (
    <PageSection>
      <div style={{ textAlign: 'center', marginTop: '32px' }}>
        <Spinner size='xl' color='lightgray' />;
      </div>
    </PageSection>
  );
};

export default LoadingSpinner;