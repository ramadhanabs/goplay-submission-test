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
    height: max-content;
    min-width: 240px;
    margin: 16px;

    @media (max-width: 576px) {
      display: none;
    }
  `,
  link: css`
    display: flex;
    padding: 16px 0px;
    text-decoration: none;
  `,
};

function NavigationBar() {
  return (
    <nav css={styles.root}>
      {MENU_LIST.map((menu) => (
        <NavLink key={menu.title} to={menu.route} css={styles.link}>
          <p>{menu.title}</p>
        </NavLink>
      ))}
    </nav>
  );
}

export default NavigationBar;
