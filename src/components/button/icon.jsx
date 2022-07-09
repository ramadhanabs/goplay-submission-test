/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';

const styles = {
  root: css`
    height: 40px;
    width: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #495056;
    border-radius: 50%;
    border: none;
    cursor: pointer;
    opacity: 0.4;

    &:hover {
      opacity: 0.8;
    }
  `,
  img: css`
    width: 20px;
    height: 20px;
  `,
  active: css`
    opacity: 1 !important;
  `,
};

function IconButton({ icon, isActive, ...others }) {
  return (
    <button
      type="button"
      css={[styles.root, isActive && styles.active]}
      {...others}
    >
      <img src={icon} css={styles.img} alt="" />
    </button>
  );
}

export default IconButton;
