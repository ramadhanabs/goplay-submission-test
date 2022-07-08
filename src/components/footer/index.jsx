/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';

const styles = {
  root: css`
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    color: white;
    text-align: center;
    padding: 16px 0px;
  `,
};

function Footer() {
  return (
    <footer css={styles.root}>
      <p className="regular-metadata-xs">
        Created with 💕 by Ramadhana Bagus Solichuddin
      </p>
    </footer>
  );
}

export default Footer;
