/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import NavigationBar from '../navigation-bar';

const styles = {
  root: css`
    display: flex;
    height: 100vh;
  `,
  child_wrapper: css`
    margin: 16px;
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