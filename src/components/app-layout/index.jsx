/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import NavigationBar from '../navigation-bar';
import BottomNavigationBar from '../navigation-bar/bottom';

const styles = {
  root: css`
    display: flex;
    min-height: 100vh;
    padding: 40px 80px;

    @media (max-width: 576px) {
      padding: 0px;
      margin-bottom: 60px;
    }
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
      <BottomNavigationBar />
    </div>
  );
}

export default AppLayout;
