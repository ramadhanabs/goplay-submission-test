/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import { NavLink } from 'react-router-dom';
import { MENU_LIST } from '../../constants/menu';

const styles = {
  root: css`
    padding: 16px;
    border-radius: 16px;
    background: #343a40;
    height: calc(100vh-60px);
    width: 240px;
    margin: 16px;
  `,
};

function NavigationBar() {
  return (
    <nav css={styles.root}>
      {MENU_LIST.map((menu) => (
        <NavLink key={menu.title} to={menu.route}>
          <p>{menu.title}</p>
        </NavLink>
      ))}
    </nav>
  );
}

export default NavigationBar;
