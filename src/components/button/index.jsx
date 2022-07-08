/** @jsxRuntime classic */
/** @jsx jsx */
import React from 'react';
import { css, jsx } from '@emotion/react';

const styles = {
  root: css`
    padding: 12px 32px;
    background: #495057;
    color: #ced4da;
    border-radius: 8px;
    cursor: pointer;
    border: 0px;

    &:disabled: {
      opacity: 0.5;
      cursor: not-allowed;
    }

    &:hover {
      background: black;
    }
  `,
};

function Button(props) {
  const { children, ...others } = props;
  return (
    <button css={styles.root} type="button" {...others}>
      {children}
    </button>
  );
}

export default Button;
