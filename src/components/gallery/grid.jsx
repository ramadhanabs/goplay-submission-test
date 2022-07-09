/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';

const styles = {
  img_wrapper: css`
    margin: 8px;
    aspect-ratio: 1/1;
    border-radius: 4px;
    overflow: hidden;
  `,
  img: css`
    object-fit: cover;
    object-position: center;
    background-repeat: no-repeat;
    width: 100%;
    aspect-ratio: 1/1;
  `,
};

function GridView({ data }) {
  return (
    <div className="row" style={{ flexWrap: 'wrap' }}>
      {data.length > 0 &&
        data.map((img) => (
          <div className="col">
            <div css={styles.img_wrapper}>
              <img
                css={styles.img}
                src={img.download_url}
                alt={`picture-${img.author}`}
              />
            </div>
          </div>
        ))}
    </div>
  );
}

export default GridView;
