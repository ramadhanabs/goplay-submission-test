/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';

const styles = {
  wrapper: css`
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  root: css`
    width: 10px;
    height: 10px;
    border-radius: 10px;
    background: white;
    opacity: 0.1;
    margin: 0px 4px;
  `,
  active: css`
    opacity: 1;
  `,
};

function PaginationDots({ isActive, count }) {
  return (
    <div css={styles.wrapper}>
      {count.map((dot, index) => (
        <div
          key={dot}
          css={[styles.root, isActive === index + 1 && styles.active]}
        />
      ))}
    </div>
  );
}

export default PaginationDots;
