/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import { useNavigate, useLocation } from 'react-router-dom';
import IconButton from '../button/icon';
import ColorPicker from '../../assets/icons/color-picker.svg';
import Calculator from '../../assets/icons/calculator.svg';
import Image from '../../assets/icons/image.svg';

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

const menus = [
  {
    icon: ColorPicker,
    route: '/simple-color-picker',
  },
  {
    icon: Image,
    route: '/images-container',
  },
  {
    icon: Calculator,
    route: '/number-to-text',
  },
];

function BottomNavigationBar() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <div css={styles.wrapper}>
      <div css={styles.root}>
        {menus.map(({ icon, route }) => (
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
