/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import LoadingGIF from '../../assets/images/loading.gif';

const styles = {
  root: css`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 400px;
  `,
  img: css`
    width: 48px;
    height: 48px;
  `,
};

function Loading() {
  return (
    <div css={styles.root} data-testid="loadingComponent">
      <img src={LoadingGIF} css={styles.img} alt="" />
      <h3 className="ml-2">Loading</h3>
    </div>
  );
}

export default Loading;
