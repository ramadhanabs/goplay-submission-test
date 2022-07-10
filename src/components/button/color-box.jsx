/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';

const styles = {
  root: css`
    width: 100%;
    height: 50px;
    border-radius: 4px;
    margin: 4px;
    cursor: pointer;
    border: none;
    opacity: 0.8;
    transition: all 0.3s ease;

    &:hover {
      transform: scale(1.1);
      opacity: 1;
      transition: all 0.3s ease;
    }
  `,
  active: css`
    border: 2px solid yellow;
    transform: scale(1.1);
    opacity: 1;
    transition: all 0.3s ease;
  `,
};

function ColorBox({ isActive, color, ...others }) {
  return (
    <button
      type="button"
      key={color}
      css={css`
        ${styles.root}
        ${isActive && styles.active}
      `}
      style={{ background: color }}
      {...others}
    />
  );
}

export default ColorBox;
