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
    min-width: 300px;
    margin: 16px;

    @media (max-width: 576px) {
      display: none;
    }
  `,
  link: css`
    display: flex;
    padding: 16px;
    text-decoration: none;
  `,
};

function NavigationBar() {
  return (
    <nav css={styles.root}>
      <p className="bold-heading-3 mb-4" style={{ textAlign: 'center' }}>
        Goplay Test
      </p>
      {MENU_LIST.map((menu) => (
        <NavLink
          key={menu.title}
          to={menu.route}
          css={styles.link}
          style={({ isActive }) => ({
            backgroundColor: isActive && '#2D2F32',
            borderRadius: '16px',
          })}
        >
          <p>{menu.title}</p>
        </NavLink>
      ))}
    </nav>
  );
}

export default NavigationBar;
