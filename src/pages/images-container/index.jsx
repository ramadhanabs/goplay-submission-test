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
      <div className="mb-3" css={styles.wrapper}>
        <h3>Images Container</h3>
      </div>
      <div css={styles.wrapper}>
        <ImagesContainerApp />
      </div>
    </AppLayout>
  );
}

export default ImagesContainer;
