/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import NavigationBar from '../navigation-bar';

const styles = {
  root: css`
    display: flex;
    min-height: 100vh;
  `,
  child_wrapper: css`
    padding: 16px;
    flex-grow: 1;
  `,
};

function AppLayout({ children }) {
  return (
    <div css={styles.root}>
      <NavigationBar />
      <div css={styles.child_wrapper}>{children}</div>
    </div>
  );
}

export default AppLayout;
