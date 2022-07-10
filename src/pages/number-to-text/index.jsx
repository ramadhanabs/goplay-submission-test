/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import AppLayout from '../../components/app-layout';
import NumberToTextApp from '../../apps/number-to-text-app';

const styles = {
  wrapper: css`
    padding: 24px;
    border-radius: 16px;
    background: #343a40;
    width: auto;
    color: white;
  `,
};

function NumberToText() {
  return (
    <AppLayout>
      <div className="mb-3">
        <h2>Number To Text</h2>
      </div>
      <div css={styles.wrapper}>
        <NumberToTextApp />
      </div>
    </AppLayout>
  );
}

export default NumberToText;
