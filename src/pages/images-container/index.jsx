/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import AppLayout from '../../components/app-layout';
import ImagesContainerApp from '../../apps/images-container-app';

function ImagesContainer() {
  return (
    <AppLayout>
      <ImagesContainerApp />
    </AppLayout>
  );
}

export default ImagesContainer;
