/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import logo from '../../assets/images/logo-goplay.webp';

const styles = {
  logo_wrapper: css`
    width: 30px;
    height: 30px;
    border-radius: 50%;
  `,
  logo: css`
    object-fit: cover;
    object-position: center;
    width: 30px;
    height: 30px;
    border-radius: 50%;
  `,
};

function Header() {
  return (
    <header>
      <div className="row mb-1" style={{ alignItems: 'center' }}>
        <div css={styles.logo_wrapper} className="mr-2">
          <img src={logo} alt="logo-goplay" css={styles.logo} />
        </div>
        <h1>Goplay Frontend Engineer Test</h1>
      </div>
      <p>
        Features: Simple Color Picker, Images Container, Number to Text
        Converter
      </p>
      <hr />
    </header>
  );
}

export default Header;
