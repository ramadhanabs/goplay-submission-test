/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import AppLayout from '../../components/app-layout';
import ImagesContainerApp from '../../apps/images-container-app';

const styles = {
  wrapper: css`
    padding: 16px;
    border-radius: 16px;
    background: #343a40;
    width: auto;
    color: white;
  `,
};

function ImagesContainer() {
  return (
    <AppLayout>
      <ImagesContainerApp />
    </AppLayout>
  );
}

export default ImagesContainer;
