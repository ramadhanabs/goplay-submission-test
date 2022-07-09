/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import { NavLink } from 'react-router-dom';
import { MENU_LIST } from '../../constants/menu';
import logo from '../../assets/images/logo-goplay.webp';

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
  header: css`
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  logo_wrapper: css`
    width: 20px;
    height: 20px;
    border-radius: 50%;
  `,
  logo: css`
    object-fit: cover;
    object-position: center;
    width: 20px;
    height: 20px;
    border-radius: 50%;
  `,
};

function NavigationBar() {
  return (
    <nav css={styles.root}>
      <div css={styles.header} className="mb-4">
        <div css={styles.logo_wrapper}>
          <img src={logo} alt="logo-goplay" css={styles.logo} />
        </div>
        <p className="bold-heading-3 ml-2" style={{ textAlign: 'center' }}>
          Goplay Test
        </p>
      </div>
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
