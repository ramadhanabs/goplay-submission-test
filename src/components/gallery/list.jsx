/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import Button from '../button';

const styles = {
  img: css`
    object-fit: cover;
    object-position: center;
    background-repeat: no-repeat;
    width: 100%;
    aspect-ratio: 1/1;
  `,
  img_list_wrapper: css`
    height: 50px;
    width: 50px;
    border-radius: 4px;
    overflow: hidden;
  `,
  column_list: css`
    display: flex;
    align-items: center;
    padding: 8px;
    justify-content: space-between;
    border-radius: 4px;

    &:nth-child(odd) {
      background: black;
    }
  `,
};

function ListView({ data }) {
  return (
    <div>
      {data.length > 0 &&
        data.map((img) => (
          <div css={styles.column_list}>
            <div className="row" style={{ alignItems: 'center' }}>
              <div css={styles.img_list_wrapper}>
                <img
                  css={styles.img}
                  src={img.download_url}
                  alt={`picture2-${img.author}`}
                />
              </div>
              <p className="bold-body pl-2">{img.author}</p>
            </div>
            <Button>Original Image</Button>
          </div>
        ))}
    </div>
  );
}

export default ListView;
