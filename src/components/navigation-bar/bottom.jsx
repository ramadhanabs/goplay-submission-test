/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import { useNavigate, useLocation } from 'react-router-dom';
import IconButton from '../button/icon';
import { MENU_LIST } from '../../constants/menu';

const styles = {
  wrapper: css`
    position: fixed;
    bottom: 0;
    background: #1e1e1e;
    height: 60px;
    width: 100%;
    display: none;

    @media (max-width: 576px) {
      display: block;
    }
  `,
  root: css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    padding: 0px 28px;
  `,
};

function BottomNavigationBar() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <div css={styles.wrapper}>
      <div css={styles.root}>
        {MENU_LIST.map(({ icon, route }) => (
          <IconButton
            icon={icon}
            onClick={() => navigate(route)}
            isActive={pathname === route}
          />
        ))}
      </div>
    </div>
  );
}

export default BottomNavigationBar;
