/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';

const styles = {
  root: css`
    padding: 12px 16px;
    min-width: 200px;
    border: none;
    background: #495056;
    border-radius: 8px;
    color: white;
    outline: none;
    &:focus {
      border: 1px solid #8066b5;
      background: #424a52;
    }
    ::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
    ::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  `,
  block: css`
    width: 100%;
  `,
};

function Input({ block, ...others }) {
  return <input css={[styles.root, block && styles.block]} {...others} />;
}

export default Input;
